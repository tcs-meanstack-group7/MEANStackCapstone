const express = require('express');
const router = express.Router();

const userController = require("../controllers/user.controller");
const passportJWT = require('../middlewares/passportJWT')();

router.get("/funds",userController.funds);
router.put("/addFunds",userController.addFunds);
router.put("/editUser",userController.edit);

module.exports = router;