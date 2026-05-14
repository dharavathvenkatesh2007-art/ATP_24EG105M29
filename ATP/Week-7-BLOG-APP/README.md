#  Week-7 BLOG-APP

This repository contains the **Blog Application Project** for Week-7 of the ATP_24EG105M29 course.  
It is a full-stack MERN (MongoDB, Express, React, Node.js) application that demonstrates **user authentication, blog creation, and frontend-backend integration**.

---

## Folder Structure & Explanation

### 1. Backend
- **Purpose**: Handles server-side logic, APIs, and database operations.
- **Key Files**:
  - `server.js` → Entry point of the backend, sets up Express server.
  - `routes/` → Contains API route definitions (e.g., `/auth`, `/blogs`).
  - `controllers/` → Business logic for handling requests (login, register, CRUD).
  - `models/` → Mongoose schemas for MongoDB collections (User, Blog).
  - `middleware/` → Authentication middleware (JWT verification).
  - `config/` → Database connection setup.
- **Learning Outcome**: Understand how to build REST APIs and connect to MongoDB.

---

### 2. Frontend
- **Purpose**: React-based user interface for the blog app.
- **Key Files**:
  - `src/App.js` → Root component, defines routes and layout.
  - `src/components/` → Reusable UI components (Navbar, BlogCard, Form).
  - `src/pages/` → Page-level components (Home, Login, Register, Dashboard).
  - `src/context/` → Context API for global state (user authentication).
  - `src/services/` → API calls using Axios/Fetch.
  - `src/styles/` → CSS/SCSS files for styling.
- **Learning Outcome**: Learn how to build a responsive frontend and integrate with backend APIs.

---

### 3. Database (MongoDB)
- **Purpose**: Stores user and blog data.
- **Collections**:
  - `users` → Stores user credentials and profile info.
  - `blogs` → Stores blog posts with title, content, author, timestamps.
- **Learning Outcome**: Practice schema design and CRUD operations in MongoDB.

---

### 4. Authentication
- **Purpose**: Secure login and registration system.
- **Files**:
  - `authController.js` → Handles signup, login, JWT token generation.
  - `authMiddleware.js` → Protects routes by verifying tokens.
- **Learning Outcome**: Implement **JWT-based authentication** in MERN apps.

---

### 5. API Endpoints
- **Examples**:
  - `POST /api/auth/register` → Register new user.
  - `POST /api/auth/login` → Login user and return JWT.
  - `GET /api/blogs` → Fetch all blogs.
  - `POST /api/blogs` → Create new blog post.
  - `PUT /api/blogs/:id` → Update blog post.
  - `DELETE /api/blogs/:id` → Delete blog post.

---
