// import University from "../../models/UniversitySchema";
import University from "../../models/UniversitySchema.js";
import CryptoJS from "crypto-js";

const arrayOfRequiredFields = ["universityName", "universityID", "email", "campusID", "password", "confirmPassword", "city", "province", "sector"];
const SignUp = async (req, res) => {
    try {
        console.log(req.body.password);
    const newUniversity = new University({
        universityID : req.body.universityID,
        universityName: req.body.universityName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.secPass).toString(),
        campusID: req.body.campusID,
        city: req.body.city,
        province: req.body.province,
        sector : req.body.sector
    })
   
        const saves = await newUniversity.save()
        res.status(201).json(saves)
    } catch (err) {
        console.log(err)
        res.status(502).json(err)
    }
}

export default SignUp;
