import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";


const displayDepartments = async (req, res, next) => {
    try {
        const { id } = req.university;
        console.log("dep recieved success");
        const departments = await Department.find({universityId : id}).select("universityId dep_Name fee semester level openingDate closingDate applyMerit isAdmissionOpen");
        // console.log(departments)
        // if(!departments) throw new ApiError("error",404, "No data found", true);
        if (departments.length < 1) {
            const departments = [{
                _id: "no data",
                dep_Name: 'no data',
                level: 'no data found',
                semester: 'no data found',
                fee: 'no data found',
                applyMerit: 0.00,
                closingDate: "0/0/0000",
                openingDate: "0/0/0000",
                isAdmissionOpen: false,
                universityId: {
                    universityName: "No date found",
                    website: "https://www.google.com/"
                }
            }]
            return sendSuccessResponse(res, 200, true, "No Departments. ", null, departments);
        }
        return sendSuccessResponse(res, 200, true, "Your Departments. ", null, departments);

    } catch (error) {
        // res.status(40).json(error);
        next(error);
    }
};

export default displayDepartments;