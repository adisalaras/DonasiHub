'use strict';

const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { User } = require('../../../models');
const { errorMessage } = require('../../utils/helpers');

/**
 * Register new user
 */
exports.list = async (req) => {
    const { query } = req;
    const perPage = parseInt(query.perPage, 10) || 10;
    const page = parseInt(query.page, 10) || 1;
    const keyword = query.keyword || null;
    const offset = (page - 1) * perPage;

    const where = {};

    // Search by name or email
    if (keyword) {
        where[Op.or] = [
            { full_name: { [Op.iLike]: `%${keyword}%` } },
            { email: { [Op.iLike]: `%${keyword}%` } }
        ];
    }

    const { count, rows: users } = await User.findAndCountAll({
        where,
        attributes: { exclude: ['password'] },
        limit: perPage,
        offset: offset,
        order: [['created_at', 'DESC']]
    });

    return {
        pagination: {
            total: count,
            page: page,
            perPage: perPage,
            totalPages: Math.ceil(count / perPage)
        },
        users        
    };
};

exports.create = async (req) => {

    const { body } = req;

    const { email, password, full_name, phone, role = 'donor' } = body;

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

    return {
        user: {
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            role: user.role
        }
    };
};


exports.update = async (req) => {
    const { body, params } = req;
    const { id } = params;
    const { email, password, full_name, phone, role } = body;

    const user = await User.findByPk(id);
    if (!user) {
        errorMessage('User not found', 404);
    }

    // Check email only if different from current and exists for another user
    if (email && email !== user.email) {
        const existingUser = await User.findOne({
            where: {
                email,
                id: { [Op.ne]: id }
            }
        });
        if (existingUser) {
            errorMessage('Email already registered', 400);
        }
    }

    // Prepare update data
    const updateData = {};
    if (email) updateData.email = email;
    if (full_name) updateData.full_name = full_name;
    if (phone) updateData.phone = phone;
    if (role) updateData.role = role;

    // Hash password only if provided
    if (password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(password, salt);
    }

    await user.update(updateData);

    return {
        user: {
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            role: user.role
        }
    };
};

/**
 * Delete user by ID
 */
exports.delete = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        errorMessage('User not found', 404);
    }

    await user.destroy();

    return { id: user.id };
};
