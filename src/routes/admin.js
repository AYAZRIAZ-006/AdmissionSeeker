import  express  from "express";
import contactForm from "../utils/contactForm.js";

const router = express.Router();

router.post("/contact", contactForm);


export default router;


