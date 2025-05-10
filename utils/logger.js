const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '../logs/refresh.log');

function logRefresh(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync(logFile, logMessage + '\n');
}

module.exports = logRefresh;
