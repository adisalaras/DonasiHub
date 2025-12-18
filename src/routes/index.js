const Express = require('express');
const router = Express.Router();

const authRoutes = require('../services/auth/auth.route');

router.use('/auth', authRoutes);