import express from "express";
import AuthAPIs from "./auth.js";
import departmentApi from "./Deparments.js"
import UniversityApis from "./university.js";
import AdminApis from "./admin.js"

const router = express.Router();

router.use("/auth", AuthAPIs);
router.use("/department", departmentApi);
router.use("/universities", UniversityApis);
router.use("/Admin", AdminApis);

export default router;