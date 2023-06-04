import mongoose from "mongoose";

const DepartmentSchema = mongoose.Schema(
  {
    dep_Id: { type: String, required: true },
    dep_Name: { type: String, required: true },
    deciplineType: { type: Array, required: true },
    level: {
      type: String,
      enum: ['bachelor', 'master', 'phd', 'mphil', 'diploma'],
      required: true
    },
    semester: { type: Number, required: true },
    applyMerit: { type: Number, required: true },
    isAdmissionOpen: { type: Boolean, required: true },
    openingDate: { type: String, required: true },
    closingDate: { type: String, required: true },
    fee: { type: Number, required: true },
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "University",
    },
  },
  { Timestamps: true }
);
const Department = mongoose.model("Department", DepartmentSchema);
export default Department;
