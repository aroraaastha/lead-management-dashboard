# Lead Management Dashboard

A mini CRM-style Lead Management Dashboard built with **React, Node.js, Express, and MongoDB**.  
The project allows users to manage leads efficiently with search, filters, pagination, and analytics metrics.

---

## 🛠️ Technology Stack

- **Frontend:** React, Tailwind CSS, Vite  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (Free Tier)  
- **Deployment:** Vercel (Frontend) + Railway/Render (Backend)

---

## ⚡ Features

- **Login:** Basic authentication  
- **Leads Table:** Displays all leads with search by name/email  
- **Filters & Sorting:** Filter leads by stage, sort by name/email/phone  
- **Pagination:** Server-side pagination for performance  
- **Lead Details:** View individual lead details  
- **Analytics Metrics:**  
  - Total leads  
  - Leads by stage  
  - Converted leads  

---

## 📦 Setup Instructions

### Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
Install dependencies:

npm install
Create a .env file and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000
Seed the database with dummy leads:

node seed.js
Start the backend server:

npm run dev
Frontend
Navigate to the frontend folder:

cd frontend
Install dependencies:

npm install
Start the frontend app:

npm run dev
Open the app in your browser (default: http://localhost:5173)

🚀 Deployment
Frontend: [Vercel Link]

Backend: [Railway/Render Link]

👤 Demo Credentials
Email: admin@example.com

Password: admin123

📂 Project Structure
Lead-Management-Dashboard/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ server.js
│  ├─ seed.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  └─ App.jsx
│  ├─ public/
│  └─ vite.config.js
├─ README.md
└─ .gitignore
✅ Notes
Backend uses server-side search, filters, sorting, and pagination for performance

Database uses MongoDB Atlas Free Tier

App is mobile responsive

📌 Author
Astha – Fresher Developer
