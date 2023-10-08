var express = require("express");
var router = express.Router();
const { userController } = require("../controller/index");

/* GET users listing. */
router.get("/gettshirt", userController.gettshirt);
router.post("/posttshirt", userController.posttshirt);

module.exports = router;
