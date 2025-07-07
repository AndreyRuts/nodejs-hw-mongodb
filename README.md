# Contacts Service API 📇

A fully‑featured **REST API for managing personal contacts**.  
Built with **Node.js, Express, MongoDB, JWT authentication, Google OAuth, Cloudinary image uploads, and Swagger / Redoc documentation**.

---

## 🌐 Live Documentation

- **Redoc / Swagger UI:** https://contacts-app-syny.onrender.com/api-docs/

---

## 🚀 Tech Stack

| Category         | Libraries / Tools                                                            |
| ---------------- | ---------------------------------------------------------------------------- |
| Runtime          | **Node.js** (ES Modules)                                                     |
| Server framework | **Express 4**                                                                |
| Database         | **MongoDB** + **Mongoose 8**                                                 |
| AuthN / AuthZ    | **JWT**, `bcrypt`, `cookie-parser`, **Google OAuth** (`google-auth-library`) |
| Validation       | **Joi 17**                                                                   |
| File uploads     | **Multer** → **Cloudinary** (avatars)                                        |
| Email            | **Nodemailer** + **Handlebars templates**                                    |
| Docs             | **Swagger UI** (`swagger-ui-express`), **Redocly CLI**                       |
| Logging          | **pino-http** + `pino-pretty`                                                |
| Utilities        | `cors`, `dotenv`, `http-errors`                                              |

> The OpenAPI spec is bundled to JSON via Redocly CLI and served at `/api-docs`.

---

## 📦 Core Features

### Authentication

- **User sign‑up / login / logout**
- Secure password hashing with `bcrypt`
- **JWT access tokens** stored in HTTP‑only cookies
- Optional **Google OAuth** sign‑in

### Contacts CRUD

- Create, read, update, delete contacts (`/contacts`)
- **Favorite toggle** (`PATCH /contacts/:id/favorite`)
- Pagination & filtering (query params)

### User Profile

- Upload / replace **avatar** (Multer → Cloudinary)
- Email verification & password reset e‑mails (Nodemailer)

### Developer UX

- Interactive API docs (Swagger UI + Redoc)
- Request logging with `pino-http`
- Centralised error handler (`http-errors`)

---

### Configure Environment

Create .env from .env.example:

PORT=3000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=supersecret
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
EMAIL_FROM=you@example.com
EMAIL_PASS=app_password
FRONTEND_URL=https://your-frontend.app
