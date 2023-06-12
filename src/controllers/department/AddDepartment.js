import mongoose from "mongoose";
import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "../../utils/checkAllRequiredsField.js";
// import uniqueDepartment from "../../utils/uniqueDepartment.js";
// import trimAndLowerCase from "../../utils/trimAndLowerCase.js";
const arrayOfRequiredFields = ["dep_Name", "level", "semester", "applyMerit", "isAdmissionOpen", "openingDate", "closingDate", "fee"];


const AddDepartment = async (req, res, next) => {
    try {
        const { id } = req.university;
        const { dep_Name  } = req.body;
        // req.body.dep_Name = dep_Name.trim().toLowerCase();
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ status: false, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
        }
        //   let {openingDate, closingDate } = req.body;
        // const trimLowerDeciplineType = trimAndLowerCase(deciplineType);
        // const Query = { $and: [{ universityId :id },{ dep_Id } ] };
        // console.log("query", Query);
        // const departments = await Department.find(Query).select("dep_Id");
        // const currentUserDetails = { universityId:id,  dep_Id};
        // console.log(departments);
        
        // const isUnique = uniqueDepartment(departments, currentUserDetails);

        // if (isUnique !== true) {
        //     return res.status(400).json(isUnique);
        // }
        req.body.universityId = mongoose.Types.ObjectId(id);
        // req.body.deciplineType = trimLowerDeciplineType;
        const newDepartment = new Department(req.body);
        if (!newDepartment) {
            throw new ApiError("Db Error", 400, "Department not created ", true);
        }
        await newDepartment.save();
        return sendSuccessResponse(res, 201, true, "Department Add successfully. ", null, newDepartment); 
    } catch (error) {
        next(error);
    }
};

export default AddDepartment;