import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()

const sendEmail = ({ email = null, subject = "signin", html = `<h1>wellcome to AdmissionSeeker<h1>` }) => {
    try {
        console.log("user", process.env.Eth_user);
                const transporter = nodemailer.createTransport({
            host: process.env.Eth_host,
            port: process.env.Eth_port,
            auth: {
                user: process.env.Eth_user,
                pass: process.env.Eth_pass
            }
        });
        console.log("email", email);
        console.log("html", html);
        console.log("subj", subject);
        const msg = {
            to: email,
            from: "AdmissionSeeker@gmail.com",
            subject,
            html,
            text: "Asslam o alikum,",
        };
        const mail = transporter.sendMail(msg, (err, data) => {
            if (err) {
                console.log("err in sending mail", err);
                return err;
            } else {
                // console.log("sending mail", data);
                return data;

            }
        })
        return mail;
    } catch (err) {
        console.log("error in sending email", err.message);
    }
};

export default sendEmail;
