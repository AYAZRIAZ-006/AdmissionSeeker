import mongoose from "mongoose";
import ContactForm from "../models/contactForm.js";
import { ApiError } from "./ApiError.js";
import sendSuccessResponse from "./sendSuccessResponse.js";
import CheckIfAllRequiredFieldsArePresent from "./checkAllRequiredsField.js";
const arrayOfRequiredFields = ["Name", "email", "message"];


const ContactForms = async (req, res) => {
    try {
        const { Name, email, message  } = req.body;
        const errors = CheckIfAllRequiredFieldsArePresent(req.body, arrayOfRequiredFields); // returns an object with all the errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ status: false, message: `Please fill out the required fields : ${Object.keys(errors)} ` });
        }
        const newMsg = new ContactForm(req.body);
        if (!newMsg) {
            throw new ApiError("Db Error", 400, "Massage not stored in DB ", true);
        }
        await newMsg.save();
        return sendSuccessResponse(res, 200, true, "Message Add successfully. ", null, newMsg); 
    } catch (error) {
        res.status(404).json(error);
    }
};

export default ContactForms;