var express = require("express");
var usercontroller = require("../controller/usercontroller");

var router = express.Router();

router.get("/fetch", usercontroller.flipkartFetch);
router.get("/url", usercontroller.airportFetch);
router.post("/distance", usercontroller.Distance);
router.get("/nearest", usercontroller.nearestAirport);




module.exports = router;

