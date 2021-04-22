const express = require('express');
const router = express.Router();

const authController = require("../controllers/emp.auth.controller");
const passportJWT = require('../middlewares/passportJWT')();
const { isEmail, hasPassword } = require('../validations/validators')

router.post("/login", authController.login);
router.post("/signUp", [hasPassword ], authController.signup);

module.exports = router;