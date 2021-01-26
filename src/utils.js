import { adjectives, nouns } from "./words";
import sgMail from "@sendgrid/mail";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export const sendSecretMail = (adress, secret) => {
  const msg = {
    from: "silluat11@gmail.com",
    to: adress,
    subject: "Login Secret for Nomadgram",
    html: `Hello! Your login secret it ${secret}. <br/>Copy paste on the app/website to login`,
  };

  return sgMail
    .send(msg)
    .then(() => console.log("Email sent"))
    .catch((error) => console.log(error));
};

export const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);
