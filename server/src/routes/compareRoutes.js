const express = require("express");
const { getAllCars } = require("../controllers/compareController");
const router = express.Router();
router.route("/compare").get(getAllCars);
module.exports = router;
