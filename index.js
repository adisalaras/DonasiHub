require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to DonasiHub API',
        status: 'running'
    });
});

// Database connection & Server start
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to database:', err);
    });
