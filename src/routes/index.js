const Express = require('express');
const router = Express.Router();

const authRoutes = require('../services/auth/auth.route');
const userRoutes = require('../services/users/users.route');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;