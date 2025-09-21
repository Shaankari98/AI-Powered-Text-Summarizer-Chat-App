import express from 'express';
import Chat from '../models/Chat.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import OpenAI from 'openai';

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

const router = express.Router();

// Ensure OPENAI_API_KEY exists
const openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
    throw new Error("OPENAI_API_KEY is missing in your .env file. Add it in backend/.env");
}

const openai = new OpenAI({ apiKey: openaiApiKey });

// POST /api/chat - send message to AI
router.post('/', authMiddleware, async (req, res) => {
    const { message } = req.body;

    try {
        // Call OpenAI API
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        const chat = new Chat({
            user: req.user.id,
            message,
            aiResponse: aiResponse.choices[0].message.content
        });

        await chat.save();
        res.json(chat);
    } catch (err) {
        console.error("Error calling OpenAI:", err);
        res.status(500).json({ error: err.message });
    }
});

// GET /api/chat - get all chats for user
router.get('/', authMiddleware, async (req, res) => {
    try {
        const chats = await Chat.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(chats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;

