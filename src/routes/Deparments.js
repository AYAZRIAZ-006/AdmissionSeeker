import express from "express"
import { AddDepartment,displayDepartments, updateDepartment, deleteDepartment } from "../controllers/department/index.js";
import authMiddleware from "../middleware/authMiddleware.js";
import University from "../models/UniversitySchema.js";
import showDepartments from "../utils/showDepartments.js";

const router = express.Router();

router.post("/Add",authMiddleware(University), AddDepartment);
router.put("/:_id",authMiddleware(University), updateDepartment);
router.delete("/:_id",authMiddleware(University), deleteDepartment);
router.get("/show",authMiddleware(University), displayDepartments);
router.post("/conditionalShow", showDepartments);

export default router;