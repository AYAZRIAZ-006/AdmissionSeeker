const Department = require("../Models/Department");
const {
  verifyToken
} = require("./verifyToken");
const mongoose = require("mongoose");
const router = require("express").Router();

//Create

router.post("/AddDepartment", verifyToken, async (req, res) => {
  const { id } = req.university;
  console.log(id);
  // const newProduct = new product(req.body);
  // console.log(req.body);

  req.body.universityId = mongoose.Types.ObjectId(id);
  // console.log("new body",req.body);
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
