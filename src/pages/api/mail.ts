import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  const msg = {
    to: "dev@krishnaaa.com",
    cc: "krishnakumarlal8421@gmail.com",
    from: `${req.body.name} <contact@krishnaaa.com>`,
    subject: `Krishnaaa.com | New message from ${req.body.name}`,
    html: `
        <h3>Name: ${req.body.name}</h3>
        <p>Email: ${req.body.email}</p>
        <p>${req.headers["x-forwarded-for"] || req.connection.remoteAddress}</p>
        <p>${req.headers["user-agent"]}</p>
        <p>${new Date().toLocaleString()}</p>
        <br>
        <p>${req.body.message}</p>
    `,
  };

  sgMail.setApiKey(SENDGRID_API_KEY);

  try {
    await sgMail.send(msg);
    return res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.statusCode).json({
        message: error.response.body.errors[0].message,
      });
    }
  }
}
