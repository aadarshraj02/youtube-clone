import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/channels", channelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
