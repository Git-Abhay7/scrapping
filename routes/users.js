var express = require("express");
var usercontroller = require("../controller/usercontroller");

var router = express.Router();

router.get("/fetch", usercontroller.flipkartFetch);
/**
 * @swagger
 * /users/url:
 *   get:
 *     tags:
 *       - airport
 *     description: fetch all the airports 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Airport Fetched.
 *       404:
 *         description: Not Found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/url", usercontroller.airportFetch);
/**
 * @swagger
 * /users/distance:
 *   post:
 *     tags:
 *       - airport
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: lat1
 *         description: 
 *         in: formData
 *         required: true
 *       - name: lat2
 *         description:
 *         in: formData
 *         required: true
 *       - name: lon1
 *         description:
 *         in: formData
 *         required: true
 *       - name: lon2
 *         description:
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Distance Found, Succesfully.
 *       404:
 *         description: Not Found.
 */
router.post("/distance", usercontroller.Distance);
/**
 * @swagger
 * /users/nearest:
 *   get:
 *     tags:
 *       - airport
 *     description: fetch all the airports 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Airport Fetched.
 *       404:
 *         description: Not Found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/nearest", usercontroller.nearestAirport);

module.exports = router;