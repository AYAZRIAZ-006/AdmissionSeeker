import { ApiError } from "./ApiError.js";
import Department from "../models/Department.js"
import sendSuccessResponse from "./sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "./checkAllRequiredsField.js";

const arrayOfRequiredFields = ["dep_Name", "deciplineType", "level", "applyMerit"];


const showDepartments = async (req, res) => {
    try {
        // const data = {
        //     dep_Name : "Computer Science",
        //     Merit : Number(70.3),
        //     deciplineType : "IT",
        // }
    //    const Merit = Number(70.3);
    const { dep_Name , applyMerit , deciplineType} = req.body;
    const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
    console.log("err",errors);
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ status: false, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
    }
        const query = {$and : [{dep_Name : dep_Name}, {applyMerit : {$lt: applyMerit}},{isAdmissionOpen : false},{deciplineType : deciplineType} ]}
        // const departments = await Department.find({$and : [{dep_Name :"electrical Engineering"},{applyMerit:{$gt: 40} } ]})
        const departments = await Department.find(query).select("universityId dep_Name closingingData applyMerit isAdmissionOpen");
        console.log(departments)
        if(departments.length < 1) throw new ApiError("error",404, "No data found", true);
        return sendSuccessResponse(res, 200, true, "Your Departments. ", null, departments);

    } catch (error) {
        res.status(404).json(error);
    }
};

export default showDepartments;