const cron = require('node-cron');
const loadCSV = require('../load-csv');
const logRefresh = require('../utils/logger');

function startRefreshJob() {
  cron.schedule('0 0 * * *', async () => {
    try {
      const result = await loadCSV();
      logRefresh('[CRON] Success: ' + result.message);
    } catch (err) {
      logRefresh('[CRON] Failed: ' + err.message);
    }
  });

  logRefresh('[CRON] Job scheduled for daily 12 AM refresh.');
}

module.exports = { startRefreshJob };
