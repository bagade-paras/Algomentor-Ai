import express from "express";
import cors from "cors";
import "dotenv/config";

import chatRoute from "./routes/chat.js";


console.log("Loaded Key:", process.env.GEMINI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});