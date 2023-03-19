// const mongoose = require("mongoose")
import mongoose from "mongoose";
import errorHandler from "./src/utils/Errorhandler.js";
import app from "./src/middleware/routeMiddlewares.js";
import AppRoutes from "./src/routes/index.js"
import bodyParser from "body-parser";
import express from "express";
// const dotenv = require("dotenv")
import dotenv from "dotenv"
// const app = express()
dotenv.config()
mongoose.set('strictQuery', true);
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const universityRoute = require("./routes/university");
// const authRoute = require("./src/routes/auth")
app.use("/api/v1/", AppRoutes);
// const universityRoute = require("./src/routes/university")
// app.use (express.json())
// app.use("/api/university", universityRoute)
// app.use("/api/auth", authRoute)

mongoose.connect(process.env.mongoURL,{useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => { console.log("DBConnection Successfull") })
    .catch((err) => { console.log(err) })

        // error handler
        app.use((err, req, res, next) => {
            console.log( `Handeling error: ${err?.message}`);
            if (!errorHandler.isTrustedError(err)) {
                next(err);
            }
            // errorHandler.handleError(err);
            console.log( `returing: ${err?.message}`);
            return res.status(err?.httpCode ?? 500).json({
                name: err.name,
                status: err?.httpCode ?? 500,
                success: false,
                error: true,
                message: err?.message,
            });
        });
    

app.listen(process.env.port || 5000, () => {
    console.log("Backend Server is running")
})