import transporter from "../config/nodemailer.js";

export const sendEmail = async ({ from, to, subject, html }) => {
  const mailOptions = {
    from,
    to: `"Build Connect" <${process.env.EMAIL_USER}>`,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};

