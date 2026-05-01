# Bachelor Basa

Bachelor Basa is a full-stack rental house finder web application for bachelor students near universities in Bangladesh. The platform allows students to browse simple rental listings, while admins can manage house information through a protected dashboard.

## Features

- User registration and login
- JWT-based authentication
- Role-based access control for admin users
- Browse available house listings
- View house details
- Search/filter houses by university, location, and rent range
- Admin dashboard
- Add, edit, and delete house listings
- About Developer / CV page
- MySQL database integration using Prisma ORM

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- Prisma ORM
- MySQL
- JWT
- bcryptjs

### Tools
- Postman
- MySQL Workbench
- Prisma Studio
- Git & GitHub

## Project Structure

```text
bachelor-basa/
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── screenshots/
└── README.md