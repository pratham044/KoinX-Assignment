const axios = require("axios");
const CryptoPrice = require("./cryptoPrice.model");

// Function to fetch and store crypto data ( Task : 1 )
async function fetchCryptoData() {
  const coins = ["bitcoin", "matic-network", "ethereum"];
  console.log("Starting data fetch...");

  for (const coin of coins) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}`
      );

      // Access the first item in the response array
      const coinData = response.data[0]; 

      console.log("Fetched data for", coin, ":", coinData); 

      // Create a new price record
      const newPrice = new CryptoPrice({
        coinId: coin,
        priceUSD: coinData.current_price,
        marketCapUSD: coinData.market_cap,
        change24h: coinData.price_change_percentage_24h,
        timestamp: new Date(),
      });

      await newPrice.save();
      console.log(`Saved data for ${coin}`);
    } catch (error) {
      console.error(`Error fetching data for ${coin}:`, error);
    }
  }
}

module.exports = fetchCryptoData;
