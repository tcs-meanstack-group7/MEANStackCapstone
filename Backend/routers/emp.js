const express = require('express');
const router = express.Router();

const authController = require("../controllers/emp.controller");
const passportJWT = require('../middlewares/passportJWT')();
const { isEmail, hasPassword } = require('../validations/validators')

router.post("/login", authController.login);
router.post("/signUp", [hasPassword ], authController.signup);
router.post("/sendRequest", authController.sendrequest)
router.post("/editProfile", authController.editProfile)
router.post("/unlock", authController.unlock)

//delete employee
router.get("/deleteEmpById/:empId",authController.deleteEmpById);

module.exports = router;