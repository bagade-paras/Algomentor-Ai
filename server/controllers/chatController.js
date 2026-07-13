import { askGemini } from "../chatbot/chatbot.js";

export async function chatWithGemini(req, res) {
  try {
    const { question } = req.body;

    const answer = await askGemini(question);

    res.json({
      success: true,
      answer,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}