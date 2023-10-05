const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve the React app's static files
const clientBuildPath = path.join(__dirname, "../client/build");
app.use(express.static(clientBuildPath));

// API routes
app.get("/", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.post('/contact', async (req, res) => {
    console.log(req.body);
    const { name, email, address, message } = req.body;

    if (!name || !email || !address || !message) {
        return res.status(400).send("Reminder: Please enter all the required fields first!");
    }

    try {
        const newUser = new User({ name, email, address, message }); // Use a different variable name here
        await newUser.save();
        return res.status(201).send("Registered successfully, we'll get back to you soon!");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});

// server create 
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})



