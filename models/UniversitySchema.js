const mongoose = require("mongoose")

const UniversitySchema = mongoose.Schema({
    universityID :
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
)
module.exports = mongoose.model("University", UniversitySchema) 