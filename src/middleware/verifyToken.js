const jwt = require("jsonwebtoken");
const universities = require("../models/UniversitySchema");


///////////// verify token  //////////////
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token !== null) {
    jwt.verify(token, process.env.secretketjwt, async (err, university) => {
      if (err) res.status(403).json({ message: "Token is not Valid" });
      // console.log("verify", user);
      const LoginUniversity = await universities.findOne({ _id: university.id });
      // console.log("ver", LoginUser);
      req.university = LoginUniversity;
      // console.log("verifyToken", req.user);
      next();
    });
  } else {
    res.status(200).json({ message: "You are not authenticate University" });
  }
};

//Authorization of user
// const verifyAuthorizationToken = (req, res, next) => {
//   verifyToken(req, res, async () => {
//     // console.log("user id ",req.user.id);
//     // console.log("parms id ",req.params.id);
//     if (req.university.id == req.params.id ) {
//       next();
//     } else {
//       res.json({ message: "You are not allow to that" });
//     }
//   });
// };




module.exports = {
  verifyToken,
//   verifyAuthorizationToken,
};
