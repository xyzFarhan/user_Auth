require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Parse requests
app.use(express.json());

// Connect to MongoDB
connectDB();

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
