import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";


const displayDepartments = async (req, res) => {
    try {
        const { id } = req.university;
        const departments = await Department.find({universityId : id}).select("universityId dep_Name openingData applyMerit isAdmissionOpen");
        console.log(departments)
        if(!departments) throw new ApiError("error",404, "No data found", true);
        return sendSuccessResponse(res, 200, true, "Your Departments. ", null, departments);

    } catch (error) {
        res.status(404).json(error);
    }
};

export default displayDepartments;