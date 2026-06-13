import express from "express";
import dotenv from "dotenv";

// 1. LOAD ENV FIRST
dotenv.config(); 

// 2. IMPORT ROUTES AND DB AFTER LIBRARIES
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js"; 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB(); // Now when this runs, process.env.MONGO_URI won't be undefined!
});
