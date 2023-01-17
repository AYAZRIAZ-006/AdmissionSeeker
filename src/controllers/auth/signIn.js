import University from "../../models/UniversitySchema.js"
import CryptoJS from "crypto-js"
import  jwt  from "jsonwebtoken"

const SignIn = async (req, res) => {
    try {
        const university = await University.findOne({ email: req.body.email })
        if (!university) {
            res.status(400).json({status:400,message :"Invalid Credentials university not found"})
        }else{
        const hashedPassword = CryptoJS.AES.decrypt(university.password, process.env.secPass)
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        if (originalPassword != req.body.password) {
            return res.status(400).json("Invalid Password")
        }

        const accessToken = jwt.sign({id : university._id}, process.env.secretketjwt)


        const { password, ...others } = university._doc
        res.status(200).json({...others , accessToken})
    }
    } catch (error) {
        console.log(error)
        res.status(402).json(error)
    }

}

export default SignIn;