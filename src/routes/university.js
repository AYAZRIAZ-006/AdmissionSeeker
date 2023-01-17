import Department from "../models/Department";
const mongoose = require("mongoose");
const router = require("express").Router();

//Create

router.post("/AddDepartment", verifyToken, async (req, res) => {
  const { id } = req.university;
  console.log(id);
  // const newProduct = new product(req.body);
  // console.log(req.body);
  let {openingDate, closingDate } = req.body;
  req.body.universityId = mongoose.Types.ObjectId(id);
  // console.log("new body",req.body);
  let [month, day, year] = openingDate.split('-');//format from user is month-day-year
  openingDate = `${year}-${month}-${day}`; //converting it to year-month-day
  let [month1, day1, year1] = closingDate.split('-');//format from user is month-day-year
  closingDate = `${year1}-${month1}-${day1}`; //converting it to year-month-day
  req.body.openingDate = openingDate;
  req.body.closingDate = closingDate;
  const newDepartment = new Department(req.body);

  // console.log(newProduct);

  try {
    const savedDepartment = await newDepartment.save();
    res.status(200).json(savedDepartment);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
