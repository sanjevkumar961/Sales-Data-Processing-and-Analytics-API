const { Order } = require('../models');
const { Op } = require('sequelize');

exports.totalRevenue = async (req, res) => {
  const { startDate, endDate } = req.query;
  const orders = await Order.findAll({
    where: {
      dateOfSale: {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      },
    },
  });

  const total = orders.reduce((sum, o) => {
    return sum + o.unitPrice * o.quantitySold * (1 - o.discount);
  }, 0);

  res.json({ totalRevenue: total.toFixed(2) });
};
