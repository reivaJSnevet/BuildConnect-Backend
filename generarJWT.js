import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const user = {
    sub: "1234567890",
    email: "a@gmail.com",
    role: "admin",
};

const token = jwt.sign(
	user,
	process.env.JWT_SECRET,
);
console.log("Este es el TOKEN:");
//console log the token em color cyan
console.log("\x1b[36m%s\x1b[0m", `Bearer ${token}`);

