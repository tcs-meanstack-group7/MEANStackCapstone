const express = require('express');
const router = express.Router();

const authController = require("../controllers/auth.controller");
const passportJWT = require('../middlewares/passportJWT')();
const { isEmail, hasPassword } = require('../validations/validators')

router.post("/login", authController.login);
router.post("/signUp", [isEmail, hasPassword ], authController.signup);

module.exports = router;