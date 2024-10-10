const CryptoPrice = require("../cryptoPrice.model");

// Task 2: Get stats for a specific coin
async function getStats(req, res) {
  const coin = req.query.coin;

  // Validate the input
  if (!coin || !['bitcoin', 'matic-network', 'ethereum'].includes(coin)) {
    return res.status(400).json({ error: "Invalid coin. Please specify 'bitcoin', 'matic-network', or 'ethereum'." });
  }

  try {
    const latestData = await CryptoPrice.findOne({ coinId: coin })
      .sort({ timestamp: -1 })
      .exec();

    if (!latestData) {
      return res.status(404).json({ error: "No data found for the requested coin." });
    }

    return res.json({
      price: latestData.priceUSD,
      marketCap: latestData.marketCapUSD,
      "24hChange": latestData.change24h
    });
  } catch (error) {
    console.error("Error fetching data from database:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = getStats;
