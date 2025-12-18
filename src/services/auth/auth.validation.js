'use strict';

const { Joi } = require('express-validation');

exports.registerValidation = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        full_name: Joi.string().min(2).max(100).required(),
        phone: Joi.string().min(10).max(15).optional(),
        role: Joi.string().valid('donor', 'campaigner').optional()
    })
};

exports.loginValidation = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
};
