'use strict';

const service = require('./auth.service');

/**
 * Register new user
 * POST /api/auth/register
 */
exports.register = async (req, res, next) => {
    try {
        const data = await service.register(req.body);
        return res.status(201).json({
            success: true,
            message: 'Registration successful',
            data
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * Login user
 * POST /api/auth/login
 */
exports.login = async (req, res, next) => {
    try {
        const data = await service.login(req.body);
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * Logout user (client-side token removal)
 * POST /api/auth/logout
 */
exports.logout = async (req, res, next) => {
    try {
        // JWT is stateless, logout is handled client-side
        // This endpoint is for consistency and can be extended
        // for token blacklisting if needed
        return res.status(200).json({
            success: true,
            message: 'Logout successful'
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * Get current user profile
 * GET /api/auth/me
 */
exports.getProfile = async (req, res, next) => {
    try {
        const data = await service.getProfile(req.user.id);
        return res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        return next(error);
    }
};
