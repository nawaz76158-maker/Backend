# Backend Development

A backend development learning journey focused on understanding how servers, APIs, databases, authentication, authorization, and security work together to build real-world applications.

As part of this journey, I built a **Task Manager API** using Node.js, Express.js, MongoDB, and Mongoose.

---

## 📸 Project Preview

### Task Manager API

A RESTful backend API that allows users to create, read, update, and delete tasks while protecting routes using JWT authentication.

> Add your Task Manager screenshots here.

---

## ✨ What I Learned

During this backend journey, I learned and practiced:

- Node.js fundamentals
- npm and package management
- Express.js
- Creating HTTP servers
- REST APIs
- HTTP methods
- Routing
- Middleware
- Request and response handling
- Route parameters
- Query parameters
- JSON data
- CRUD operations
- MongoDB
- MongoDB Atlas
- Mongoose
- Schemas and Models
- Controllers
- Environment variables
- Error handling
- Input validation
- Authentication
- Authorization
- JWT (JSON Web Tokens)
- Password hashing with bcrypt
- Protected routes
- User ownership of resources
- API testing with Thunder Client / Postman
- Git and GitHub

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password hashing |
| dotenv | Environment variables |
| Thunder Client | API testing |
| Git & GitHub | Version control |

---

# 🚀 Task Manager API

The main project I built during this backend journey is a **Task Manager API**.

The API allows authenticated users to manage their tasks and demonstrates how authentication, authorization, validation, database operations, and REST API design work together.

---

## ✨ Features

### 👤 User Authentication

- User signup
- User login
- Password hashing using bcrypt
- JWT token generation
- JWT token verification
- Protected routes

### 🔐 Authorization

- Users must provide a valid JWT token to access protected routes
- Users can access their own tasks
- Unauthorized requests are rejected

### 📋 Task Management

- Create a task
- Get tasks
- Get a task by ID
- Update a task
- Delete a task

### ✅ Task Validation

Tasks include fields such as:

- Title
- Description
- Priority
- Due date
- Completed status

Priority validation is implemented using:

```text
low
medium
high
```

---

# 🔑 Authentication Flow

The authentication system works approximately like this:

```text
User
 │
 ├── Signup
 │      │
 │      ▼
 │   Validate Input
 │      │
 │      ▼
 │   Hash Password
 │      │
 │      ▼
 │   Save User
 │
 └── Login
        │
        ▼
   Find User
        │
        ▼
   Compare Password
        │
        ▼
   Generate JWT
        │
        ▼
   Send Token
        │
        ▼
   Access Protected Routes
```

---

# 🛡️ Password Security

Passwords are never stored as plain text.

The password is hashed using **bcrypt** before being stored in the database.

```javascript
const hashedPassword = await bcrypt.hash(password, 10);
```

During login, the entered password is compared with the stored hash:

```javascript
const isMatch = await bcrypt.compare(
    password,
    user.password
);
```

---

# 🔐 JWT Authentication

After successful login, a JWT token is generated.

The client sends the token using the Authorization header:

```text
Authorization: Bearer <token>
```

The authentication middleware:

1. Checks whether a token exists
2. Extracts the token
3. Verifies the token
4. Identifies the user
5. Allows access to the protected route

If the token is missing or invalid, the request is rejected.

---

# 🗄️ Database

The project uses **MongoDB** with **Mongoose**.

### User Model

The User model contains:

- Name
- Email
- Password
- Created date
- Updated date

### Task Model

The Task model contains:

- Title
- Description
- Priority
- Due date
- Completed status
- Timestamps

---

# 🌐 API Structure

## Authentication

### Signup

```text
POST /auth/signup
```

Creates a new user.

### Login

```text
POST /auth/login
```

Authenticates the user and returns a JWT token.

---

## Tasks

### Get All Tasks

```text
GET /tasks
```

### Get Task by ID

```text
GET /tasks/:id
```

### Create Task

```text
POST /tasks
```

### Update Task

```text
PUT /tasks/:id
```

### Delete Task

```text
DELETE /tasks/:id
```

Protected routes require a valid JWT token.

---

# 🧩 Backend Architecture

The project follows a structured backend approach:

```text
Client
  │
  ▼
Routes
  │
  ▼
Middleware
  │
  ▼
Controllers
  │
  ▼
Models
  │
  ▼
MongoDB
```

This separation makes the application easier to understand, maintain, and extend.

---

# 🧪 API Testing

I tested the API using **Thunder Client / Postman**.

Some of the authentication tests included:

- Signup with valid data
- Signup with an existing email
- Login with correct password
- Login with incorrect password
- Access protected route without a token
- Access protected route with a valid token
- Access protected route with an invalid token
- Create tasks
- Update tasks
- Delete tasks
- Validate task priority

---

# 📚 Backend Concepts Practiced

## Stage 1 — Backend Fundamentals

- Node.js
- npm
- Express.js
- HTTP methods
- Routes
- Middleware
- Request and response objects

## Stage 2 — Database

- MongoDB
- MongoDB Atlas
- Mongoose
- Schemas
- Models
- CRUD operations

## Stage 3 — Authentication & Security

- Authentication
- Authorization
- JWT
- bcrypt
- Password hashing
- Protected routes
- Middleware-based authentication
- Input validation

## Stage 4 — Project

Built a complete **Task Manager API** combining the concepts learned throughout the backend journey.

---

# 📌 What I Learned From This Project

This project helped me understand how a backend application works beyond individual code examples.

I learned how:

- A client communicates with a server
- Express handles API requests
- Routes connect requests to controllers
- Middleware can protect routes
- Controllers handle application logic
- Mongoose communicates with MongoDB
- Passwords should be securely hashed
- JWT can be used for authentication
- APIs should validate user input
- Different backend components work together as one system

---

# 🎯 Future Improvements

Possible improvements for the Task Manager API:

- Refresh token authentication
- Role-based authorization
- Pagination
- Search and filtering
- Sorting tasks
- Better centralized error handling
- API documentation
- Automated testing
- Deployment
- Frontend integration

---

## 🔗 More Projects

Check out my other work:

**https://github.com/nawaz76158-maker**

---

## 👤 Built By

**Mohammad Nawaz**

BCA Student  
Ballari, Karnataka

---

*Built as part of my Backend Development learning journey.*