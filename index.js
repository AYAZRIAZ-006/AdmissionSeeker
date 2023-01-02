const express = require("express")
express.Router()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
dotenv.config()
mongoose.set('strictQuery', true);


// const universityRoute = require("./routes/university");
const authRoute = require("./routes/auth")
const universityRoute = require("./routes/university")
app.use (express.json())
app.use("/api/university", universityRoute)
app.use("/api/auth", authRoute)

mongoose.connect(process.env.mongoURL)
    .then(() => { console.log("DBConnection Successfull") })
    .catch((err) => { console.log(err) })


app.listen(process.env.port || 5000, () => {
    console.log("Backend Server is running")
})