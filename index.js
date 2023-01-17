// const mongoose = require("mongoose")
import mongoose from "mongoose";
import app from "./src/middleware/routeMiddlewares.js";
import AppRoutes from "./src/routes/index.js"
// const dotenv = require("dotenv")
import dotenv from "dotenv"
// const app = express()
dotenv.config()
mongoose.set('strictQuery', true);


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


app.listen(process.env.port || 5000, () => {
    console.log("Backend Server is running")
})