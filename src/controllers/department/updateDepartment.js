import mongoose from "mongoose";
import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "../../utils/checkAllRequiredsField.js";
import trimAndLowerCase from "../../utils/trimAndLowerCase.js";
const arrayOfRequiredFields = ["dep_Name", "level", "semester", "applyMerit", "isAdmissionOpen", "openingDate", "closingDate", "fee"];

const updateDepartment = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const opts = { session, new: true };
    try {
        const { id } = req.university;
        const { dep_Name, dep_Id, level, semester, applyMerit, isAdmissionOpen, openingDate, closingDate, fee } = req.body;
        const { _id } = req.query;
        console.log("id", _id);
        console.log("body", req.body);
        console.log("uni id", id);
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            throw new ApiError("invalid details", 400, `Please fill out the required fields : ${Object.keys(errors)} `, true);
        }
        console.log("uni", id);
        const checkIfDepExist = await Department.findOne({ _id, unversityId: id });
        if (!checkIfDepExist) {
            throw new ApiError("Invalid Details", 404, "Department not Exist ", true);
        }
        const newDep_Name = dep_Name.trim().toLowerCase();
        // const trimLowerDeciplineType = trimAndLowerCase(deciplineType);
        // const Query = { $and: [{ universityId :id },{ dep_Id } ] };
        const updateDepartment = await Department.findByIdAndUpdate(
            { _id: _id }, {
            $set: {
                dep_Id,
                dep_Name: newDep_Name,
                // trimLowerDeciplineType,
                level,
                semester,
                isAdmissionOpen,
                applyMerit,
                openingDate,
                closingDate,
                fee,
            }
        }, {
            new: true,
            useFindModify: false
        },
            null,
            opts
        );
        console.log("update", updateDepartment);
        if (!updateDepartment) {
            throw new ApiError("Db Error", 400, "Department not updated ", true);
        }
        // const updateDepartment = {
        //     dep_Name:"updated",
        //     fee:"updated",
        //     applyMerit:"updated",
        //     level:"updated",
        //     isAdmissionOpen:true,

        // }
        await session.commitTransaction();
        session.endSession();
        return sendSuccessResponse(res, 200, true, "Department update successfully. ", null, updateDepartment);
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};

export default updateDepartment;