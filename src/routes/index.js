import express from "express";
import AuthAPIs from "./auth.js";
import departmentApi from "./Deparments.js"

const router = express.Router();

router.use("/auth", AuthAPIs);
router.use("/department", departmentApi);

export default router;