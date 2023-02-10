import  express  from "express";
import { SignUp, SignIn } from "../controllers/auth/index.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);

// router.post('/forget-password-email', ForgetPasswordEmail);

export default router;


