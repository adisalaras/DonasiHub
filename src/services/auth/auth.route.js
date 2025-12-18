'use strict';

const express = require('express');
const { validate } = require('express-validation');

const controller = require('./auth.controller');
const { registerValidation, loginValidation } = require('./auth.validation');
const { authenticate } = require('../../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', validate(registerValidation), controller.register);
router.post('/login', validate(loginValidation), controller.login);
router.post('/logout', controller.logout);

// Protected routes
router.get('/me', authenticate, controller.getProfile);

module.exports = router;
