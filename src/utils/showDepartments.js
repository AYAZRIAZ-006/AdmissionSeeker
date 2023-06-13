import Department from "../models/Department.js"
import sendSuccessResponse from "./sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "./checkAllRequiredsField.js";
import bodyParser from "body-parser";
import express from "express";
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const arrayOfRequiredFields = ["dep_Name", "deciplineType", "level", "applyMerit"];


const showDepartments = async (req, res, next) => {
    try {
        console.log("fron", req.body);
        const { dep_Name, applyMerit, level, deciplineType } = req.body;
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ status: false, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
        }
        const query = { $and: [{ dep_Name: dep_Name }, { level: level }, { applyMerit: { $lt: applyMerit } }, { isAdmissionOpen: true }/*,{deciplineType : deciplineType} */] }
        const query2 = { $and: [{ dep_Name: { $ne: dep_Name }},{ level: level }, { applyMerit: { $lt: applyMerit } }, { isAdmissionOpen: true },/*{deciplineType : deciplineType} */] }
        // const departments = await Department.find({$and : [{dep_Name :"electrical Engineering"},{applyMerit:{$gt: 40} } ]})
        const departments = await Department.find(query).select("universityId dep_Name level closingDate applyMerit isAdmissionOpen").populate("universityId");
        const departmentsAll = await Department.find(query2).select("universityId dep_Name level closingDate applyMerit isAdmissionOpen").populate("universityId");
        if (departments.length < 1) {
            const departments = [{
                _id: "no data",
                dep_Name: 'no data',
                level: 'no data found',
                applyMerit: 0.00,
                closingDate: "0/0/0000",
                isAdmissionOpen: false,
                universityId: {
                    universityName: "No date found",
                    website: "https://www.google.com/"
                }
            }]
            if( departmentsAll.length < 1) return sendSuccessResponse(res, 200, true, "No Departments. ", null, { a: departments, b: departments });
            return sendSuccessResponse(res, 200, true, "No Departments. ", null, { a: departments, b: departmentsAll });
        }
        return sendSuccessResponse(res, 200, true, "Your Departments. ", null, { a: departments, b: departmentsAll });

    } catch (error) {
        // res.status(404).json(error);
        next(error);
    }
};

export default showDepartments;