import University from "../../models/UniversitySchema.js";
import CheckIfAllRequiredFieldsArePresent from "../../utils/checkAllRequiredsField.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import { EMAIL_REGEX } from "../../constants/regex.js";
import unique from "../../utils/uniqueUniversity.js";
const arrayOfRequiredFields = ["universityName","website", "email", "campusID", "password", "confirmPassword", "city", "province", "sector"];

const SignUp = async (req, res, next) => {
    try {
        const AllArray = [];
        const { universityName, website,email, city, campusID, province, sector, password, confirmPassword } = req.body;
        console.log(req.body);
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ status: 400, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
        }
        if (!email.match(EMAIL_REGEX)) {
            AllArray.push("Enter the valid email");
        }
        if (password !== confirmPassword) {
            AllArray.push("password and confirm password does not match");
        }
        if (AllArray.length > 0) {
            throw new ApiError("Invalid details", 400, `${AllArray} `, true);
        }
        const Query = { email };
        const university = await University.find(Query).select("_id email campusID");
        const currentUserDetails = { email: email.toLowerCase() };
        const isUnique = unique(university, currentUserDetails);

        if (isUnique !== true) {
            throw new ApiError("Invalid Details", 400, `email already exist `, true);
        }
        const newUniversity = new University(req.body);
        if (!newUniversity) {
            throw new ApiError("Db Error", 400, `University not created `, true);
        }

        await newUniversity.save()
        return sendSuccessResponse(res, 201, true, "University registered successfully. ", null, newUniversity);
    } catch (err) {
        console.log(err)
        next(err)
    }
}

export default SignUp;
