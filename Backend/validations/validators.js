const {body} = require('express-validator');

exports.isEmail = body('email')
    .isEmail()
    .withMessage("Email field must contain valid email");

exports.hasPassword = body('password')
    .exists()
    .withMessage("Password cannot be empty")
