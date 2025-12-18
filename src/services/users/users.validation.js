'use strict';

const { Joi } = require('express-validation');

exports.createValidation = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        full_name: Joi.string().min(2).max(100).required(),
        phone: Joi.string().min(10).max(15).optional(),
        role: Joi.string().valid('donor', 'campaigner', 'admin').optional()
    })
};

exports.updateValidation = {
    body: Joi.object({
        email: Joi.string().email().optional(),
        password: Joi.string().min(6).optional(),
        full_name: Joi.string().min(2).max(100).optional(),
        phone: Joi.string().min(10).max(15).optional(),
        avatar_url: Joi.string().uri().optional(),
        role: Joi.string().valid('donor', 'campaigner', 'admin').optional()
    })
};
