const CryptoPrice = require("../cryptoPrice.model");
const simple_statistics = require("simple-statistics");

// Task 3: Get the standard deviation for a specific coin
async function getDeviation(req, res) {
  const coin = req.query.coin;

  // Validate the input
  if (!coin || !["bitcoin", "matic-network", "ethereum"].includes(coin)) {
    return res
      .status(400)
      .json({
        error:
          "Invalid coin. Please specify 'bitcoin', 'matic-network', or 'ethereum'.",
      });
  }

  try {
    const records = await CryptoPrice.find({ coinId: coin })
      .sort({ timestamp: -1 })
      .limit(100)
      .exec();

    if (records.length === 0) {
      return res
        .status(404)
        .json({ error: "No data found for the requested coin." });
    }

    // Calculating the Standard Deviation
    const prices = records.map((record) => record.priceUSD);
    const deviation = simple_statistics.standardDeviation(prices);

    return res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    console.error("Error fetching data from database:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = getDeviation;
