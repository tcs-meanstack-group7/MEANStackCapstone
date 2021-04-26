let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../controllers/product.controller.js");
let authController = require("../controllers/auth.controller.js");
let { isEmail, hasUsername, hasPassword } = require("../validations/validators")

router.post("/login", authController.login);
router.post("/signup", [isEmail, hasUsername, hasPassword], authController.signup);
router.post("/me", authController.me);

//mapping sub path with http methods. 
router.get("/allProductDetails",ProductController.getProductDetails);
router.get("/retrieveProductById/:pid",ProductController.getProductById)
router.post("/storeProductDetails",ProductController.storeProductDetails);
router.delete("/deleteProductById/:pid",ProductController.deleteProductById);
router.put("/updateProductPrice",ProductController.updateProductPrice);

module.exports=router;