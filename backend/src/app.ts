import contactRoutes from "./routes/contactRoutes";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Backend Running Successfully 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

export default app;