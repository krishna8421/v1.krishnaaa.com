import { EMAIL_ADDRESS, GMAIL_ADDRESS, SENDGRID_API_KEY, SITE_DOMAIN, TIME_ZONE } from "@constants";
import { NextApiRequest, NextApiResponse } from "next";
import { capitalizeFirstLetter } from "@utils/capitalize";
import sgMail from "@sendgrid/mail";
import dbConnect from "@db/connect";
import { Contact } from "@db/models";
import { rateLimit } from "@utils/rateLimit";

const limiter = rateLimit({
  // 60 seconds
  interval: 60 * 1000,
  // Max 50 users per second
  uniqueTokenPerInterval: 50,
});

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
  if (!SENDGRID_API_KEY) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }

  sgMail.setApiKey(SENDGRID_API_KEY);
  // 3 requests per minute
  if (await limiter.check(res, 3, "CACHE_TOKEN")) {
    return res.status(429).json({
      message: "Too many requests. Please try again after some time.",
    });
  }
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

  const data = {
    name: name,
    email: email,
    message: message,
    ip: req.headers["x-forwarded-for"],
    country: req.headers["x-vercel-ip-country"],
    state: req.headers["x-vercel-ip-country-region"],
    city: req.headers["x-vercel-ip-city"],
    userAgent: req.headers["user-agent"],
    date: new Date().toLocaleString(undefined, { timeZone: TIME_ZONE }),
  };

  const msg = {
    to: EMAIL_ADDRESS,
    cc: GMAIL_ADDRESS,
    from: `${req.body.name} <contact@${SITE_DOMAIN}>`,
    subject: `${capitalizeFirstLetter(SITE_DOMAIN)} | New message from ${req.body.name}`,
    html: `
        <h3>Name:         ${data.name}</h3>
        <p>Email:         ${data.email}</p>
        <p>IP:            ${data.ip}</p>
        <p>Country:       ${data.country}</p>
        <p>State:         ${data.state}</p>
        <p>City:          ${data.city}</p>        
        <p>User Agent:    ${data.userAgent}</p>
        <p>Date:          ${data.date}</p>
        <br>
        <p>${data.message}</p>
    `,
  };

  try {
    await dbConnect();
    const contact = new Contact(data);
    await contact.save();
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
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
