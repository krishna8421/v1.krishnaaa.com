import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  ip: String,
  country: String,
  state: String,
  city: String,
  userAgent: String,
  date: Date,
});

export const Contact = mongoose.model("contacts", ContactSchema);
