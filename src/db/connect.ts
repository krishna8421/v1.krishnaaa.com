import mongoose from "mongoose";

export const mongoDBConnect = async () => mongoose.connect(process.env.MONGO_URI);
