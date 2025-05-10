const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Customer = require('./Customer')(sequelize, Sequelize.DataTypes);
const Product = require('./Product')(sequelize, Sequelize.DataTypes);
const Order = require('./Order')(sequelize, Sequelize.DataTypes);

Customer.hasMany(Order);
Order.belongsTo(Customer);
Product.hasMany(Order);
Order.belongsTo(Product);

module.exports = { sequelize, Customer, Product, Order };
