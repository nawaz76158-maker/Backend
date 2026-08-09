# Task Manager API

A RESTful backend for managing tasks, built with Node.js, Express, and MongoDB. Built as a structured learning project — every feature was implemented, tested, and debugged with real understanding, not copy-pasted.

## Features

- **Authentication** — signup/login with JWT tokens and bcrypt password hashing
- **Protected routes** — middleware verifies JWT and attaches the authenticated user to every request
- **Full CRUD** — create, read, update, delete tasks via REST endpoints
- **Ownership-scoped access** — users can only view, update, or delete their own tasks. Cross-user access attempts and missing-resource requests both return an identical `404`, by design, to avoid leaking which task IDs exist
- **Input validation** — server-side validation on task fields (e.g. `priority` restricted to `low` / `medium` / `high`), because client-side validation alone can always be bypassed
- **Partial updates** — `PUT` only modifies fields actually sent in the request body, instead of overwriting the full document
- **Environment-based config** — secrets and DB connection string kept out of source control via `.env`

## Tech Stack

- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT (`jsonwebtoken`) for auth
- bcrypt for password hashing
- dotenv for environment config

## Architecture

```
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

## Authentication Flow

```
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

## API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Log in, receive a JWT |

### Tasks (all require `Authorization: Bearer <token>`)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get all tasks belonging to the logged-in user |
| GET | `/tasks/:id` | Get a single task (must belong to the user) |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task (must belong to the user) |
| DELETE | `/tasks/:id` | Delete a task (must belong to the user) |

## Project Structure

```
src/
  config/       # DB connection
  controllers/  # Route logic
  middleware/   # Auth middleware, logging
  models/       # Mongoose schemas (User, Task)
  routes/       # Route definitions
server.js       # Entry point
```

## Setup

```bash
git clone <repo-url>
cd task-manager-api
npm install
```

Create a `.env` file in the root:
```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Run the server:
```bash
node server.js
```

## Security Notes

- Passwords are hashed with bcrypt (10 salt rounds) before storage — never stored in plain text.
- JWT payload contains only the user ID, kept minimal since JWT payloads are readable (not encrypted) by anyone with the token.
- Task ownership is enforced at the database query level (`Task.findOne({ _id, user: req.user.id })`), not with a separate manual check — this means a nonexistent task and a task belonging to another user both return the same `404`, which avoids leaking information about what exists.

## API Testing

Tested manually with Thunder Client, covering both success and failure paths:

- Signup with valid data
- Signup with an already-registered email
- Login with correct password
- Login with incorrect password
- Access a protected route with no token
- Access a protected route with a valid token
- Access a protected route with an invalid/expired token
- Create, update, and delete tasks
- Attempt to update/delete another user's task (correctly blocked)
- Task priority validation (rejects values outside `low` / `medium` / `high`)

## What I Learned

This project went beyond following code examples — it required understanding how the pieces fit together as one system:

- How a client communicates with a server, and how Express routes requests to controllers
- How middleware can intercept and protect routes before a controller ever runs
- How Mongoose models map to MongoDB collections, and why `.save()` (not just reassigning a field) is what persists a change
- Why passwords must be hashed, never stored in plain text
- How JWTs authenticate stateless requests, and why the payload is readable but not writable without the secret
- Why server-side input validation matters even when the frontend already validates
- How to design database queries so that access control is enforced by the query itself, not a separate manual check

## Future Improvements

- Refresh token authentication
- Role-based authorization
- Pagination, search, and filtering
- Centralized error handling
- Automated testing
- Frontend integration

## What's Next

This project's patterns (auth, JWT, ownership-scoped access) are the foundation for **HealTech**, a role-based healthcare records app currently in progress — extending single-owner access control into a multi-role, care-team-based permission system.

## More Projects

**https://github.com/nawaz76158-maker**

## Built By

**Mohammad Nawaz** — BCA Student, Ballari, Karnataka