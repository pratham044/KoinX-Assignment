const schedule = require("node-schedule");
const fetchCryptoData = require("./fetchData");

// Function to schedule the job
function scheduleFetchJob() {
  schedule.scheduleJob('0 */2 * * *', function () {
    fetchCryptoData();
    console.log('Job executed at', new Date());
  });
}
cd 
module.exports = { scheduleFetchJob };
