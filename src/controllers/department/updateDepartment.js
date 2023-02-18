import mongoose from "mongoose";
import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "../../utils/checkAllRequiredsField.js";
const arrayOfRequiredFields = ["dep_Name", "deciplineType", "level", "semester", "applyMerit", "isAdmissionOpen", "openingDate", "closingDate", "fee"];

const updateDepartment = async (req, res) => {
    try {
        const { id } = req.university;
        const { dep_Name  } = req.body;
        const { params :{dep_Id} } = req;
        req.body.dep_Name = dep_Name.trim().toLowerCase();
        console.log({dep_Name, dep_Id});
        
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ status: false, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
        }
        const Query = { $and: [{ universityId :id },{ dep_Id } ] };
        console.log(Query);
        const updateDepartment = Department.findOneAndUpdate(
            Query,
                 req.body,
            { new: true }, function(err, doc) {
                console.log("doc", {err,doc});
                if (err) return res.status(500).json({error: err});
                // return res.send('Succesfully saved.');
            return res.status(400).json({ status: false, message: "update successfully", doc });

            }
          );
        //   console.log(updateDepartment);
        // if (!updateDepartment) {
        //     throw new ApiError("Db Error", 400, "Department not updated ", true);
        // }
        // await updateDepartment.save();
        // return sendSuccessResponse(res, 200, true, "Department Add successfully. ", null, updateDepartment);
    } catch (error) {
        res.status(404).json(error);
    }
};

export default updateDepartment;