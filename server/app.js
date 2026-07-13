import express from "express";
import cors from "cors";
import "dotenv/config";

import chatRoute from "./routes/chat.js";


console.log("Loaded Key:", process.env.GEMINI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoute);

app.listen(5000, () => {
  console.log("Server Running on http://localhost:5000");
});