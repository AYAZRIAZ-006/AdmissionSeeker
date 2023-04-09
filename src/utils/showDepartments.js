import { ApiError } from "./ApiError.js";
import Department from "../models/Department.js"
import sendSuccessResponse from "./sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "./checkAllRequiredsField.js";
import bodyParser from "body-parser";
import  express  from "express";
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const arrayOfRequiredFields = ["dep_Name", "deciplineType", "level", "applyMerit"];


const showDepartments = async (req, res, next) => {
    try {
    console.log("fron", req.body);
    const { dep_Name , applyMerit ,level, deciplineType} = req.body;
    const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ status: false, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
    }
        const query = {$and : [{dep_Name : dep_Name},{level:level}, {applyMerit : {$lt: applyMerit}} /*,{isAdmissionOpen : false},{deciplineType : deciplineType} */ ]}
        // const departments = await Department.find({$and : [{dep_Name :"electrical Engineering"},{applyMerit:{$gt: 40} } ]})
        const departments = await Department.find(query).select("universityId dep_Name level closingingData applyMerit isAdmissionOpen");
        console.log(departments)
        if(departments.length < 1) throw new ApiError("error",404, "No data found", true);
        return sendSuccessResponse(res, 200, true, "Your Departments. ", null, departments);

    } catch (error) {
        // res.status(404).json(error);
        next(error);
    }
};

export default showDepartments;