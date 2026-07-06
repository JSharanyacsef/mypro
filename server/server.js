// ==============================
// Student Collaboration Platform
// Backend - Part 1
// ==============================

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
console.log("TEST CHANGE 123");
const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://mypro-1-r9uy.onrender.com"
  ]
}));
app.use(express.json());

const USERS_FILE = path.join(__dirname, "users.json");

// ==============================
// HOME
// ==============================

app.get("/", (req, res) => {
    res.send("🚀 Student Collaboration Platform Backend Running");
});

// ==============================
// GET ALL USERS
// ==============================

app.get("/users", (req, res) => {

    fs.readFile(USERS_FILE, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                message: "Unable to read users file"
            });
        }

        const users = JSON.parse(data);

        res.json(users);

    });

});

// ==============================
// REGISTER
// ==============================

app.post("/register", (req, res) => {

    fs.readFile(USERS_FILE, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                message: "Unable to read users file"
            });
        }

        const users = JSON.parse(data);

        const {
            fullName,
            email,
            password,
            rollNumber,
            year,
            branch,
            interests
        } = req.body;

        const existingUser = users.find(
            user => user.email === email
        );

        if (existingUser) {

            return res.status(400).json({
                message: "Email already registered"
            });

        }

        const newUser = {

            id: Date.now(),

            fullName,

            email,

            password,

            rollNumber,

            year,

            branch,

            interests,

            connections: []

        };

        users.push(newUser);

        fs.writeFile(

            USERS_FILE,

            JSON.stringify(users, null, 2),

            (err) => {

                if (err) {

                    return res.status(500).json({
                        message: "Unable to save user"
                    });

                }

                res.json({

                    message: "Registration Successful",

                    user: newUser

                });

            }

        );

    });

});

// ==============================
// LOGIN
// ==============================

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    fs.readFile(USERS_FILE, "utf8", (err, data) => {

        if (err) {

            return res.status(500).json({
                message: "Unable to read users"
            });

        }

        const users = JSON.parse(data);

        const user = users.find(

            u =>

                u.email === email &&

                u.password === password

        );

        if (!user) {

            return res.status(401).json({

                message: "Invalid Email or Password"

            });

        }

        res.json({

            message: "Login Successful",

            user

        });

    });

});
// ==============================
// CONNECT STUDENTS
// ==============================

app.put("/connect", (req, res) => {

    const { currentUserId, targetUserId } = req.body;

    fs.readFile(USERS_FILE, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                message: "Unable to read users"
            });
        }

        const users = JSON.parse(data);

        const currentUser = users.find(
            user => user.id == currentUserId
        );

        if (!currentUser) {
            return res.status(404).json({
                message: "Current user not found"
            });
        }

        if (!currentUser.connections.includes(targetUserId)) {
            currentUser.connections.push(targetUserId);
        }

        fs.writeFile(
            USERS_FILE,
            JSON.stringify(users, null, 2),
            (err) => {

                if (err) {
                    return res.status(500).json({
                        message: "Unable to save connection"
                    });
                }

                res.json({
                    message: "Connected Successfully"
                });

            }
        );

    });

});

// ==============================
// UPDATE PROFILE
// ==============================

app.put("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    fs.readFile(USERS_FILE, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                message: "Unable to read users"
            });
        }

        const users = JSON.parse(data);

        const index = users.findIndex(
            user => user.id === id
        );

        if (index === -1) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        users[index] = {
            ...users[index],
            ...req.body
        };

        fs.writeFile(
            USERS_FILE,
            JSON.stringify(users, null, 2),
            (err) => {

                if (err) {
                    return res.status(500).json({
                        message: "Unable to update profile"
                    });
                }

                res.json({
                    message: "Profile Updated Successfully",
                    user: users[index]
                });

            }
        );

    });

});

// ==============================
// GET CONNECTIONS
// ==============================

app.get("/connections/:id", (req, res) => {

    const id = Number(req.params.id);

    fs.readFile(USERS_FILE, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                message: "Unable to read users"
            });
        }

        const users = JSON.parse(data);

        const user = users.find(
            user => user.id === id
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const connections = users.filter(
            u => user.connections.includes(u.id)
        );

        res.json(connections);

    });

});

// ==============================
// START SERVER
// ==============================

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});