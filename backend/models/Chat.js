import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true },
    aiResponse: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Chat', ChatSchema);
