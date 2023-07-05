import University from "../../models/UniversitySchema.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";

const updateField = async (req, res, next) => {
    try {
        const { university, body: { fieldName, value } } = req;
        const fieldNames = University.schema.paths;
        if (!fieldName) {
            return res.status(400).json({ status: 400, message: "FieldName is missing" })
        }
        if (!value) {
           return  res.status(400).json({ status: 400, message: "Value is missing" })
        }
        if (!Object.keys(fieldNames).includes(fieldName)) {
           return  res.status(400).json({ status: 400, message: `University does not have this "${fieldName}" : fieldName` })

        }
        const query = {};
        query[fieldName] = value;
        const up = await University.updateOne({ _id: university._id }, query);
        console.log("up", up);
        return sendSuccessResponse(res, 200, true, "Field has been updated.");
    } catch (error) {
        next(error);
    }
    return false;
};

export default updateField;
