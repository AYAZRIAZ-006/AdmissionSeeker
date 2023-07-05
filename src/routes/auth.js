import  express  from "express";
import { SignUp, SignIn, insertMany, updateField } from "../controllers/auth/index.js";
import authMiddleware from "../middleware/authMiddleware.js";
import University from "../models/UniversitySchema.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/insertmany", insertMany);
router.put("/field", authMiddleware(University), updateField);

// router.post('/forget-password-email', ForgetPasswordEmail);

export default router;


