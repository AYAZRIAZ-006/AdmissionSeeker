import mongoose from "mongoose";
import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "../../utils/checkAllRequiredsField.js";
import trimAndLowerCase from "../../utils/trimAndLowerCase.js";
const arrayOfRequiredFields = ["dep_Name", "deciplineType", "level", "semester", "applyMerit", "isAdmissionOpen", "openingDate", "closingDate", "fee"];

const updateDepartment = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const opts = { session, new: true };
    try {
        const { id } = req.university;
        const { dep_Name, dep_Id, deciplineType, level, semester, applyMerit, isAdmissionOpen, openingDate, closingDate, fee  } = req.body;
        const { _id }  = req.params;        
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            throw new ApiError("invalid details",400, `Please fill out the required fields : ${Object.keys(errors)} `, true);
        }
        console.log("uni",id);
        const checkIfDepExist = await Department.findOne({ _id, unversityId: id });
        if (!checkIfDepExist) {
            throw new ApiError("Invalid Details", 404, "Department not Exist ", true);
        }
        const newDep_Name = dep_Name.trim().toLowerCase();
        const trimLowerDeciplineType = trimAndLowerCase(deciplineType);
        // const Query = { $and: [{ universityId :id },{ dep_Id } ] };
        // console.log(Query);
        // const updateDepartment = Department.findOneAndUpdate(
        //     Query,
        //          req.body,
        //     { new: true }, function(err, doc) {
        //         console.log("doc", {err,doc});
        //         if (err) return res.status(500).json({error: err});
        //         // return res.send('Succesfully saved.');
        //     return res.status(400).json({ status: false, message: "update successfully", doc });

        //     }
        //   );
        const updateDepartment = await Department.findByIdAndUpdate(
            {_id:_id},{
                $set: {
                    dep_Id,
                    dep_Name: newDep_Name,
                    trimLowerDeciplineType,
                    level,
                    semester,
                    isAdmissionOpen,
                    applyMerit,
                    openingDate,
                    closingDate,
                    fee
                }
            },{
                    new: true,
                    useFindModify: false
                },
                null,
                opts
            );
          console.log("update",updateDepartment);
        if (!updateDepartment) {
            throw new ApiError("Db Error", 400, "Department not updated ", true);
        }
        // await updateDepartment.save();
        await session.commitTransaction();
        session.endSession();
        return sendSuccessResponse(res, 200, true, "Department Add successfully. ", null, updateDepartment);
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        // res.status(404).json(error);
        next(error);
    }
};

export default updateDepartment;