import express from "express"
import { AddDepartment,displayDepartments } from "../controllers/department/index.js";
import authMiddleware from "../middleware/authMiddleware.js";
import University from "../models/UniversitySchema.js";
import showDepartments from "../utils/showDepartments.js";

const router = express.Router();

router.post("/Add",authMiddleware(University), AddDepartment);
router.get("/show",authMiddleware(University), displayDepartments);
router.get("/conditionalShow", showDepartments);

export default router;