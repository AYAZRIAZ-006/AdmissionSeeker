import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";


const displayDepartments = async (req, res, next) => {
    try {
        const { id } = req.university;
        console.log("in display", id);
        const departments = await Department.find({universityId : id}).select("universityId dep_Name openingData applyMerit isAdmissionOpen");
        console.log(departments.length);
        if(departments.length < 1) throw new ApiError("error",400, "No data found", true);
        return sendSuccessResponse(res, 200, true, "Your Departments. ", null, departments);

    } catch (error) {
        // res.status(404).json(error);
        next(error);
    }
};

export default displayDepartments;