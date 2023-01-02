const router = require("express").Router()
const University = require("../Models/UniversitySchema")
const cryptojs = require("crypto-js")
const jwt = require("jsonwebtoken")


router.post("/register", async (req, res) => {
    const newUniversity = new University({
        universityID : req.body.universityID,
        universityName: req.body.universityName,
        email: req.body.email,
        password: cryptojs.AES.encrypt(req.body.password, process.env.secPass).toString(),
        campusID: req.body.campusID,
        city: req.body.city,
        province: req.body.province,
        sector : req.body.sector
    })
    try {
        const saves = await newUniversity.save()
        res.status(201).json(saves)
    } catch (err) {
        console.log(err)
        res.status(502).json(err)
    }
})


router.post("/login", async (req, res) => {
    try {
        const university = await University.findOne({ universityName: req.body.universityName })
        if (!university) {
            res.status(400).json({status:400,message :"Invalid Credentials university not found"})
        }else{
        const hashedPassword = cryptojs.AES.decrypt(university.password, process.env.secPass)
        const originalPassword = hashedPassword.toString(cryptojs.enc.Utf8)
        if (originalPassword != req.body.password) {
            res.status(400).json("Invalid Password")
        }

        const accessToken = jwt.sign({id : university._id}, process.env.secretketjwt)


        const { password, ...others } = university._doc
        res.status(200).json({...others , accessToken})
    }
    } catch (error) {
        console.log(error)
        res.status(402).json(error)
    }

})


module.exports = router