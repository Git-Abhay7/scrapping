var express = require("express");
var usercontroller = require("../controller/usercontroller");

var router = express.Router();

router.get("/fetch", usercontroller.flipkartFetch);
router.get("/snapfetch", usercontroller.snapdealFetch);
router.get("/url", usercontroller.Urls);

module.exports = router;

