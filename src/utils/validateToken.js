import jwt from "jsonwebtoken";
// import ENV from "../config/keys.js";
import dotenv from "dotenv"
// const app = express()
dotenv.config()
function validateToken(token) {
    if (!token) {
        return {
            token: false,
            message: "Access denied. No token provided.",
        };
    }

    const bearer = token.split(" ");

    const [, bearerToken] = bearer;

    const decoded = jwt.verify(bearerToken, process.env.secretketjwt);
    if (!decoded.id) {
        return {
            token: false,
            message: "Access denied. Token is malformed",
        };
    }
    return {
        token: true,
        user: decoded.id,
    };
}

export default validateToken;
