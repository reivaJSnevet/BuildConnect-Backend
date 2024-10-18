import nodemailer from "nodemailer";

/**
 * The transporter object for sending emails.
 *
 * @type {import('nodemailer').Transporter}
 */
const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});


export const mailConnection = async () => {
  try {
    await transporter.verify();
    console.log(
      "\x1b[36m%s\x1b[0m",
      "Mail connection has been established successfully."
    );
  } catch (error) {
    console.error(
      "\x1b[31m%s\x1b[0m",
      "Unable to connect to the email server:",
      error
    );
  }
};

export default transporter;