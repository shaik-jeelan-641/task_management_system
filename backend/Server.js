import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
