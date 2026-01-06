# Maritime Fleet Tracking System – Backend

This repository contains the backend implementation of the **Maritime Fleet Tracking System**.  
The backend is built using **Node.js, Express.js, and MongoDB** and provides RESTful APIs for vessel tracking, alerts, historical data, and analytics.

---

## 📌 Project Overview

The Maritime Fleet Tracking System is designed to monitor vessels in real time, store historical movement data, generate alerts, and provide analytical insights.  
This backend serves as the core API layer for the frontend dashboard.

---

## 🚀 Features Implemented

- User Authentication (JWT based)
- Role-Based Access Control (Admin / User)
- Live Vessel Tracking APIs
- Historical Vessel Tracking
- Alerts & Notifications
- Analytics-ready APIs
- Secure REST API architecture

---

## 🛠️ Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Tokens (JWT)  
- **API Testing:** Postman  

---

## 📂 Project Structure
backend/ │── config/ │── controllers/ │── middleware/ │── models/ │── routes/ │── server.js │── package.json │── package-lock.json │── .gitignore │── README.md
---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/KavyasriSadineni811/maritime-fleet-system-backend.git cd maritime-fleet-system-backend
---

### 2️⃣ Install Dependencies
---

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the following:
PORT=5000 MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key
---

## ▶️ Run the Backend Server

### Development Mode
### Production Mode
Server will run at:
http://localhost:5000
---

## 🔗 API Endpoints (Sample)

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | User login |
| GET | /api/vessels | Fetch all vessels |
| GET | /api/vessels/:id/history | Vessel historical tracking |
| POST | /api/alerts | Create alert |
| GET | /api/analytics | Analytics data |

---

## 🧪 API Testing

All APIs were tested using **Postman**.  
A Postman collection is included for easy testing and demonstration.

---

## 🌐 Deployment

The backend can be deployed using:
- Render
- Railway
- AWS / Azure

Deployment link will be added after hosting.

---

## 📸 Submission Artifacts

- GitHub Repository ✔️  
- Postman API Collection ✔️  
- Screenshots of APIs ✔️  
- Demo Video (2–5 minutes) ✔️  
- Deployment Link (if hosted) ✔️  

---

## 👩‍💻 Author

**Kavyasri Sadineni**    
Maritime Fleet Tracking System