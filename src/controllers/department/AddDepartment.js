import mongoose from "mongoose";
import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "../../utils/checkAllRequiredsField.js";
import unique from "../../utils/uniqueUniversity.js";
import uniqueDepartment from "../../utils/uniqueDepartment.js";
const arrayOfRequiredFields = ["dep_Name", "dep_Id", "deciplineType", "level", "semester", "applyMerit", "isAdmissionOpen", "openingDate", "closingDate", "fee"];


const AddDepartment = async (req, res) => {
    try {
        const { id } = req.university;
        const { dep_Id, dep_Name  } = req.body;
        req.body.dep_Name = dep_Name.trim().toLowerCase();
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ status: false, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
        }
        //   let {openingDate, closingDate } = req.body;
        const Query = { $and: [{ universityId :id },{ dep_Id } ] };
        const departments = await Department.find(Query).select("dep_Id");
        const currentUserDetails = { universityId:id,  dep_Id};
        const isUnique = uniqueDepartment(departments, currentUserDetails);

        if (isUnique !== true) {
            return res.status(400).json(isUnique);
        }
        req.body.universityId = mongoose.Types.ObjectId(id);
        const newDepartment = new Department(req.body);
        if (!newDepartment) {
            throw new ApiError("Db Error", 400, "Department not created ", true);
        }
        await newDepartment.save();
        return sendSuccessResponse(res, 200, true, "Department Add successfully. ", null, newDepartment);
    } catch (error) {
        res.status(404).json(error);
    }
};

export default AddDepartment;