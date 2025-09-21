# 📌 AI-Powered Text Summarizer Chat App (MERN + OpenAI)

This project is a full-stack MERN application that integrates AI text summarization using the OpenAI API.
It allows users to chat with an AI assistant, store conversation history, and generate summarized text outputs seamlessly.

# 🚀 Features

🔐 User Authentication – Secure login & registration with JWT.

💬 AI Chat – Chat with an AI assistant powered by OpenAI (gpt-3.5-turbo).

✂️ Text Summarization – Enter long text and get summarized results instantly.

📜 Chat History – Stores all user chats securely in MongoDB.

⚡ MERN Stack – Built with MongoDB, Express, React, Node.js.

🌍 CORS Enabled – Backend API accessible from frontend.

# 🛠️ Tech Stack
# Frontend

React.js

Axios (API calls)

Context API (Auth & State Management)

# Backend

Node.js + Express.js

MongoDB + Mongoose (Database)

JWT Authentication

# OpenAI API Integration

# Other Tools

dotenv (environment variables)

bcryptjs (password hashing)

nodemon (dev server)

# ⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Shaankari98/AI-Powered-Text-Summarizer-Chat-App
cd ai-text-summarizer-chat-app

2️⃣ Backend Setup
cd backend
npm install


# Create a .env file inside the backend folder:

MONGO_URI=mongodb://localhost:27017/ai_chat
JWT_SECRET=your_secret_key
OPENAI_API_KEY=sk-your_openai_api_key_here


# Run the backend:

node server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm start

# 📌 API Endpoints
# Auth Routes

POST /api/auth/register → Register new user

POST /api/auth/login → Login user

Chat Routes

POST /api/chat → Send message to AI and get response

GET /api/chat → Fetch user chat history


