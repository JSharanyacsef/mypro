// Import the Express framework
const express = require("express");

// Import CORS so React can communicate with the backend
const cors = require("cors");
const fs = require("fs");

// Create an Express application
const app = express();
const path = require("path");

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Student Collaboration Platform Backend is Running 🚀");
});
// Get all users
app.get("/users", (req, res) => {
   fs.readFile(path.join(__dirname, "users.json"), "utf8", (err, data) => {
      if (err) {
    console.log(err);
    return res.status(500).json({
        message: err.message
    });
}
        const users = JSON.parse(data);
        res.json(users);
    });
});
// Register a new user
app.post("/register", (req, res) => {
    // Read existing users
    fs.readFile(path.join(__dirname, "users.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Error reading users file"
            });
        }

        // Convert JSON to JavaScript array
        const users = JSON.parse(data);

        // Get new user data from request
        const newUser = req.body;

        // Generate a simple ID
        newUser.id = Date.now();

        // Empty connections array
        newUser.connections = [];

        // Add user to array
        users.push(newUser);

        // Save updated users array
        fs.writeFile(
            path.join(__dirname, "users.json"),
            JSON.stringify(users, null, 2),
            (err) => {
                if (err) {
                    return res.status(500).json({
                        message: "Error saving user"
                    });
                }

                res.json({
                    message: "Registration successful",
                    user: newUser
                });
            }
        );
    });
});
// Login user
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    fs.readFile(path.join(__dirname, "users.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Error reading users file"
            });
        }

        const users = JSON.parse(data);

        const user = users.find(
            (u) => u.email === email && u.password === password
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
// Start the server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});