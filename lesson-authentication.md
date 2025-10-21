# Lesson: Authentication in Next.js

## 1. What is Authentication?
- Verifying a user's identity before allowing access to certain features or pages.
- Common flows: signup, login, logout, protected routes.

## 2. Authentication Flow Overview
- User signs up or logs in via a form.
- Credentials are sent to an API route.
- If valid, user info is stored in context (and optionally localStorage/cookies).
- Protected pages check if user is authenticated.
- User can log out to clear their session.

## 3. Pages to Create
- `/login` – Login form
- `/signup` – Signup form

## 4. Authentication Context
- Store user info and login state globally.
- Provide login, logout, and signup functions.

## 5. API Routes
- `/api/login` – Accepts credentials, returns user info or error.
- `/api/signup` – Accepts new user info, returns user info or error.
- `/api/logout` – Clears session.

## 6. Middleware for Protected Routes
- Restrict access to pages like `/checkout` or `/profile` if not logged in.
- Redirect unauthenticated users to `/login`.

## 7. UI Updates
- Show/hide navbar links based on login state.
- Display user info and logout button when logged in.

## 8. Practice Ideas
- Add a profile page for logged-in users.
- Show error messages for invalid login/signup.
- Add password strength validation.

## 9. Resources
- [Next.js Authentication Docs](https://nextjs.org/docs/app/building-your-application/authentication)
- [React Context Docs](https://react.dev/reference/react/createContext)
- [Protected Routes in Next.js](https://nextjs.org/docs/app/building-your-application/routing/middleware)

---

Let’s implement authentication step by step!
