require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const taskRoutes = require('./routes/taskRoutes.js');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});