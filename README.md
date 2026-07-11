# 📇 ContactHub – Contact Management System

A full-stack Contact Management application developed as part of the **Mavens SDE Intern Assessment**.

The application allows users to securely manage their contacts through authentication, perform complete CRUD operations, and visualize live COVID-19 statistics using charts and an interactive world map.

## 🌐 Live Demo

🚀 **Application Live Link :** https://contact-management-app-nine-drab.vercel.app/

🚀 **Demo Video Link :** https://drive.google.com/file/d/1X0iYmGRYBZxW9SEwQ1_dg9GcCswYt12S/view?usp=sharing

> **Note:** The backend is hosted on Render's free tier. If the API has been inactive for some time, the first request may take **30–60 seconds** while the server wakes up.

---
---

## 🚀 Project Overview

The objective of this project was to build a modern web application demonstrating authentication, state management, API integration, and responsive UI development.

The application consists of two independent parts:

- **Frontend** – React + TypeScript + Bootstrap
- **Backend** – Express.js + TypeScript + MongoDB Atlas

The frontend communicates with the backend through REST APIs, while COVID-19 statistics are fetched from the public Disease.sh API using React Query.

---

# ✨ Features

### Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Persistent User Session
- Logout

### Contact Management

- Add Contact
- View Contact Details
- Update Contact
- Delete Contact
- Search Contacts
- Responsive Contact Dashboard

### COVID Dashboard

- Worldwide Statistics
- Historical Cases Graph
- Interactive World Map
- Country-wise Statistics

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Bootstrap 5
- React Router DOM
- Redux Toolkit
- TanStack React Query
- Axios
- Recharts
- React Leaflet
- Lucide React

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt

## Deployment

- Frontend – Vercel
- Backend – Render
- Database – MongoDB Atlas

---

# 🏗 System Architecture

```text
                React + TypeScript
                        │
                        │
               React Query + Axios
                        │
                        ▼
              Express REST API Server
                        │
          JWT Authentication Middleware
                        │
                        ▼
                 MongoDB Atlas
```

---

# 📁 Project Structure

```text
ContactHub
│
├── frontend
│   ├── components
│   ├── pages
│   ├── redux
│   ├── routes
│   ├── services
│   ├── layouts
│   └── utils
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.ts
│
└── README.md
```

### Folder Description

| Folder | Purpose |
|---------|----------|
| components | Reusable UI components |
| pages | Application pages |
| redux | Global state management |
| routes | Public & Protected routes |
| services | API communication layer |
| controllers | Backend business logic |
| models | MongoDB models |
| middleware | JWT authentication middleware |

---

# 🔐 Authentication Flow

```text
Register
   │
Password Validation
   │
bcrypt Password Hashing
   │
MongoDB Atlas
───────────────
Login
   │
Credential Verification
   │
JWT Token Generated
   │
Local Storage
   │
Protected Routes
```

---

# 📞 Contact Management

The Contact module is the core functionality of the application. Every authenticated user can create, update, delete, and search their own contacts.

Each contact contains:

- First Name
- Last Name
- Email
- Phone
- Company
- Address
- Status

Redux Toolkit is used for client-side state management, while MongoDB stores the contact information securely.

---

# 📊 Charts Module

The Charts page displays worldwide COVID-19 trends using historical data fetched from the Disease.sh API.

**Why React Query?**

- Automatic caching
- Background refetching
- Better API state management

**Why Recharts?**

- Responsive charts
- Lightweight
- Easy customization

---

# 🌍 Maps Module

The Maps page displays live COVID-19 statistics for countries around the world using React Leaflet.

Each marker displays:

- Country Name
- Active Cases
- Recovered Cases
- Death Cases

The map data is dynamically fetched from the Disease.sh Countries API.

---

# 🌐 APIs Used

| API | Purpose |
|------|----------|
| `/v3/covid-19/all` | Worldwide Statistics |
| `/v3/covid-19/countries` | Country-wise Statistics |
| `/v3/covid-19/historical/all` | Historical Cases |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/contacthub.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Backend

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

## Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---




# 🚀 Challenges Faced

During development, I worked through several practical challenges:

- Implementing secure JWT authentication.
- Managing application state using Redux Toolkit.
- Integrating React Query with multiple APIs.
- Rendering a large number of map markers efficiently.
- Handling deployment and CORS configuration between frontend and backend.

---

# 📈 Future Improvements

- Profile Management
- Contact Categories
- Import & Export Contacts
- Pagination
- Dark Mode
- Unit Testing

---

# 👨‍💻 Author

**Manish Kashyap**

B.Tech Computer Science Engineering (AI & ML)

Parul University

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

## 📌 Note

The original assessment recommended **Tailwind CSS** for styling. In this implementation, **Bootstrap 5** was used to build a responsive and consistent user interface while keeping the application architecture and all required functionality aligned with the assignment requirements.
