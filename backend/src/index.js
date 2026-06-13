import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 5001;

const app = express();

app.use("/api/auth", authRoutes);

app.listen(PORT, function() {
    const actualPort = this.address().port;
    console.log(`🚀 Blab backend is ACTUALLY running on port: ${actualPort}`);
});
