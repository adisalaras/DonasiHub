'use strict';

const express = require('express');
const { validate } = require('express-validation');
const { authenticate } = require('../../middleware/auth');
const controller = require('./users.controller');
const { createValidation, updateValidation } = require('./users.validation');

const router = express.Router();

router.get('/', authenticate, controller.list);
router.post('/create', authenticate, validate(createValidation), controller.create);
router.put('/:id', authenticate, validate(updateValidation), controller.update);
router.delete('/:id', authenticate, controller.delete);

module.exports = router;
