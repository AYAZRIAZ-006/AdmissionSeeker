import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { ApiError } from "../utils/ApiError.js";

const university = mongoose.Schema({
    universityId :
     {type : String , required : true , unique:true},
    universityName:
        { type: String, required: true },
    email:
        { type: String, required: true, unique: true , lowercase : true,
        match: [
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    "Please fill a valid email address",
                  ],},
    password:
        { type: String, required: true },
    campusID:
        { type: String, required : true},
    city:
        { type: String, required: true },
    province:
        { type: String,enum :['Punjab', ' Khyber Pakhtunkhwa', 'sindh', ' Balochistan', 'Islamabad'] , required: true },
    sector:
        { type: String, required: true },
},
    { Timestamps: true }
);

university.methods.bcryptComparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new ApiError("Invalid Details", 500, "Password isn't matching", true);
    }
};

university.statics.sanitize = function () {
    const { password, createdAt, updatedAt, __v, ...rest } = this.toObject();
    return rest;
};

university.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            console.log("password is modified");
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (error) {
        throw new ApiError("Invalid Details", 500, "Password saving failed", true);
    }
});
const University = mongoose.model("University", university) 
export default University;