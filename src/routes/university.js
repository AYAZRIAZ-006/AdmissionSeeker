import  express  from "express";
import allUniversities from "../utils/allUniversites.js";

const router = express.Router();

router.get("/all", allUniversities);


export default router;


