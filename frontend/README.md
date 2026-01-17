# Lead Management Dashboard

A full-stack Lead Management Dashboard built using MERN stack.

## Features
- View all leads from MongoDB
- Search leads by name or email
- REST API using Express & MongoDB
- Clean UI with React + Tailwind CSS

## Tech Stack
- Frontend: React (Vite), Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas

## Setup Instructions

### Backend
```bash
cd backend
npm install
node server.js
Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000
Frontend
cd frontend
npm install
npm run dev
Open: http://localhost:5173

API Endpoint
GET /api/leads → Fetch all leads

Author
Astha