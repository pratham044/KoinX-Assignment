const CryptoPrice = require("../cryptoPrice.model");

// Task 1: Get all prices
async function getPrices(req, res) {
  try {
    const prices = await CryptoPrice.find();
    res.json(prices);
  } catch (error) {
    console.error("Error fetching prices:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = getPrices;
