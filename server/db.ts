import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
}