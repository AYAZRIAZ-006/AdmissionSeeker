import express from "express";
import AuthAPIs from "./auth.js";

const router = express.Router();

router.use("/auth", AuthAPIs);

export default router;