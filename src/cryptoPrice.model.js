const mongoose = require("mongoose");

// Define the CryptoPrice schema
const CryptoPriceSchema = new mongoose.Schema({
  coinId: String,
  priceUSD: Number,
  marketCapUSD: Number,
  change24h: Number,
  timestamp: Date,
});

const CryptoPrice = mongoose.model("CryptoPrice", CryptoPriceSchema);

module.exports = CryptoPrice;
