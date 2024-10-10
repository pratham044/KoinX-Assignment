const express = require("express");
const getPrices = require("./controllers/getPrices.controller");
const getStats = require("./controllers/getStats.controller");
const getDeviation = require("./controllers/getDeviation.controller");

const router = express.Router();

// Define your routes
router.get("/prices", getPrices);
router.get("/stats", getStats);
router.get("/deviation", getDeviation);

module.exports = router;
