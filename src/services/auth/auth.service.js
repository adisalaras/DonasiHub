'use strict';

const bcrypt = require('bcryptjs');
const { User } = require('../../../models');
const { generateToken } = require('../../utils/jwt');
const { errorMessage } = require('../../utils/helpers');

/**
 * Register new user
 */
exports.register = async (data) => {
    const { email, password, full_name, phone, role = 'donor' } = data;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        errorMessage('Email already registered', 400);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        email,
        password: hashedPassword,
        full_name,
        phone,
        role,
        is_verified: false
    });

    // Generate token
    const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role
    });

    return {
        user: {
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            role: user.role
        },
        token
    };
};

/**
 * Login user
 */
exports.login = async (data) => {
    const { email, password } = data;

    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) {
        errorMessage('Invalid email or password', 401);
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        errorMessage('Invalid email or password', 401);
    }

    // Generate token
    const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role
    });

    return {
        user: {
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            role: user.role
        },
        token
    };
};

/**
 * Get user profile by ID
 */
exports.getProfile = async (userId) => {
    const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] }
    });

    if (!user) {
        errorMessage('User not found', 404);
    }

    return user;
};
