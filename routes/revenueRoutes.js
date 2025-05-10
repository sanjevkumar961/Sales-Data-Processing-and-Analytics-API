const express = require('express');
const router = express.Router();
const { totalRevenue } = require('../controllers/revenueController');

router.get('/total', totalRevenue);
module.exports = router;
