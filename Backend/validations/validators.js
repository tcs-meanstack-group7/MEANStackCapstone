const {body} = require('express-validator');

exports.isEmail = body('email')
    .isEmail()
    .withMessage("Email field must contain valid email");

exports.hasPassword = body('password')
    .exists()
    .withMessage("Password cannot be empty")

exports.hasName = body('name')
    .isLength({min:3})
    .withMessage("Name is required. Min length 3 characters.")