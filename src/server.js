const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/connection");



const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Enabling Cors
app.use(cors());

// Enable static path
app.use(express.static("images"));

app.get(`/`, (req, res) => res.send("Api Running"));

// Define Routes

const applicants = require("./applicant/router");

app.use(`/api/applicants`, applicants); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
