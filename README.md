# TodoPro Exam Project

This project is a React-based exam-ready todo application built to work with the existing Todo_backend APIs.

## Modules included

- Auth
- Category
- Profile
- Project
- Task

## Panels included

- User panel
- Admin panel

## Features

- User login and registration
- Show-password controls on login and registration forms
- Role-based routing
- CRUD for category, project, and task modules
- Profile update screen
- Modern exam-friendly dashboard UI
- Chatbot account details for the signed-in account

The chatbot does not reveal passwords to users or administrators. Passwords are
stored as one-way hashes; an administrator can set a new password when needed.

## Run locally

Frontend:

```bash
cd Todo_frontend
npm install
npm run dev -- --host 0.0.0.0
```

Backend:

```bash
cd Todo_backend
node server.js
```

The frontend runs on http://localhost:5173 and the backend runs on http://localhost:3000.
The API client uses the hostname used to open the frontend, so use `localhost` or
`127.0.0.1` consistently for both apps to keep the login cookie available. To use
a different backend URL, set `VITE_API_URL` (for example,
`VITE_API_URL=https://api.example.com/api`) before starting/building the frontend.

#Run 
Front End - npm run dev
back End - node server.js
backend run = node -e "require('node:dns').setServers(['1.1.1.1']); require('./server.js')"


Regular-user login and registration verification codes are displayed on screen
for this demo; no SMS is sent and no SMS-provider credentials are needed. Admin
accounts sign in without an OTP. This is not suitable for production
authentication.
