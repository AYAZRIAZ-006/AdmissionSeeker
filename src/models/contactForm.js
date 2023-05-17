import mongoose from "mongoose";

const form = mongoose.Schema(
    {
        email: { type: String, required: true },
        Name: { type: String },
        message: { type: String },
    },
    { Timestamps: true }
);
const ContactForm = mongoose.model("contactForm", form);
export default ContactForm;
