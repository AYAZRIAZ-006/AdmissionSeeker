import University from "../../models/UniversitySchema.js"
import jwt from "jsonwebtoken"
import CheckIfAllRequiredFieldsArePresent from "../../utils/checkAllRequiredsField.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const arrayOfRequiredFields = ["email", "password"];

const SignIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        return res.status(201).json({
            user: {
                email,
                authToken: "thisisdummyAuthToken"
            },
        })
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ status: 400, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
        }
        const university = await University.findOne({ email: email.toLowerCase() })
        if (!university) {
            res.status(400).json({ status: 400, message: "Invalid Credentials university not found" })
        }
        const universityVerified = await university.bcryptComparePassword(password);
        if (!universityVerified) {
            throw new ApiError("Invalid Cradentials", 400, "Incorrect email or Password", true);
        }
        const accessToken = jwt.sign({ id: university._id }, process.env.secretketjwt)
        // const { Password, ...others } = university._doc
        return sendSuccessResponse(res, 200, true, "Login successfully. ", null, { university, accessToken });

    } catch (error) {
        console.log(error)
        next(error);
    }
}

export default SignIn;