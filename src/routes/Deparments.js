import express from "express"
import { AddDepartment } from "../controllers/department/index.js";
import authMiddleware from "../middleware/authMiddleware.js";
import University from "../models/UniversitySchema.js";

const router = express.Router();

router.post("/Add",authMiddleware(University), AddDepartment);

export default router;