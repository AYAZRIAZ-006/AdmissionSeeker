const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema(
  {
    dep_Id: { type: String, required: true, unique: true },
    dep_Name: { type: String, required: true },
    deciplineType: { type: Array , required :true },
    level : {type : String ,
         enum : ['Bachelor', 'Master', 'Phd' ,'M.phil','Diploma'],
          required : true},
    semester: { type: Number, required : true },
    applyMerit: { type: Number },
    isAdmissionOpen: { type: Boolean, required : true },
    openingDate : {type : String, required :true},
    closingDate : {type : String, required :true},
    fee: { type: Number, required: true },
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "universitySchema",
    },
  },
  { Timestamps: true }
);
const Department = mongoose.model("Department", DepartmentSchema);
export default Department;
