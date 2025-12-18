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

// Routes
const routes = require('./src/routes');

// Test route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to DonasiHub API',
        status: 'running'
    });
});

// API routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    // Handle express-validation errors
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            message: 'Validation Error',
            errors: err.details
        });
    }

    return res.status(status).json({
        success: false,
        message
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
