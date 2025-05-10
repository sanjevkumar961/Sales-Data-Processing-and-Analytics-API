const loadCSV = require('../load-csv');
const logRefresh = require('../utils/logger');

exports.refreshData = async (req, res) => {
  try {
    const result = await loadCSV();
    logRefresh('Refresh Success: ' + result.message);
    res.status(200).json({ success: true, message: result.message });
  } catch (err) {
    logRefresh('Refresh Failed: ' + err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};
