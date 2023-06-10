import mongoose from "mongoose";
import Department from "../../models/Department.js";
import { ApiError } from "../../utils/ApiError.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";


const deleteDepartment = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const opts = { session, new: true };
    try {
        const { id } = req.university;
        const { _id } = req.query;
        if (!_id) throw new ApiError("Invalid Details", 400, "Please provide Id", true);
        if (_id === "undefined") throw new ApiError("Invalid Details", 400, "Please provide Id", true);
        const checkIfDepExist = await Department.findOne({ _id, unversityId: id });
        if (!checkIfDepExist) {
            throw new ApiError("Invalid Details", 404, "Department does not Exist ", true);
        }
        const deleteDepartment = await Department.findByIdAndDelete({ _id }, opts);
        if (!deleteDepartment) {
            throw new ApiError("Invalid Details", 400, "Department does not Deleted", true);
        }
        await session.commitTransaction();
        session.endSession();
        return sendSuccessResponse(res, 200, true, "Department deleted successfully. ", null, deleteDepartment);
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error)
    }
};

export default deleteDepartment;
