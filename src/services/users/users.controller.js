'use strict';

const service = require('./users.service');

exports.list = async (req, res, next) => {
    try {
        const response = await service.list(req);
        return res.json({
            data: response,
            message: 'Data loaded',
        });
    } catch (error) {
        return next(error);
    }
};
exports.create = async (req, res, next) => {
    try {
        const response = await service.create(req);
        return res.json({
            data: response,
            message: 'Data created successfully',
        });
    } catch (error) {
        return next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const response = await service.update(req)
        return res.json({
            data: response,
            message: 'Data updated successfully',
        })
    } catch (error) {
        return next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const data = await service.delete(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Data deleted successfully',
            data
        });
    } catch (error) {
        return next(error);
    }
};


