# Student Collaboration Platform

## Overview

The Student Collaboration Platform is a full-stack web application designed to help students connect with peers who have similar academic interests. The platform allows users to register, log in, search for students, filter profiles based on interests, connect with other students, update their profiles, and receive a recommendation for their best study buddy based on shared interests.

---

## Live Demo

**Frontend:**
https://mypro-1-r9uy.onrender.com

**Backend:**
https://mypro-qvbq.onrender.com

---

## Features

* Student Registration
* Student Login Authentication
* Personalized Dashboard
* Search Students
* Filter Students by Interests
* Best Study Buddy Recommendation
* Connect with Other Students
* View Student Profiles
* Update User Profile
* Responsive User Interface

---

## Technology Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap 5
* CSS

### Backend

* Node.js
* Express.js
* CORS
* File System (fs)

### Deployment

* Render (Frontend)
* Render (Backend)

### Data Storage

* JSON (`users.json`)

---

## Project Structure

```text
mypro/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── server/
│   ├── server.js
│   ├── users.json
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/JSharanyacsef/mypro.git
cd mypro
```

### Backend Setup

```bash
cd server
npm install
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | `/`                | Backend Status            |
| GET    | `/users`           | Retrieve All Users        |
| POST   | `/register`        | Register a New Student    |
| POST   | `/login`           | User Login                |
| PUT    | `/connect`         | Connect Two Students      |
| PUT    | `/users/:id`       | Update User Profile       |
| GET    | `/connections/:id` | Retrieve User Connections |

---

## Best Study Buddy Recommendation

The platform recommends a study buddy by comparing users' academic interests. Students with the highest number of shared interests are suggested as the most suitable collaborators.

---

## Future Enhancements

* MongoDB Integration
* JWT Authentication
* Password Encryption using bcrypt
* Profile Picture Upload
* Real-Time Chat
* Notifications
* Email Verification
* Study Groups
* AI-Based Student Recommendations

---

## Author

**Sharanya**

GitHub: https://github.com/JSharanyacsef

---

## License

This project was developed for educational and hackathon purposes.
