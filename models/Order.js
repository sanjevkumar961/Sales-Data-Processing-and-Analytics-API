module.exports = (sequelize, DataTypes) =>
    sequelize.define('Order', {
      id: { type: DataTypes.STRING, primaryKey: true },
      region: DataTypes.STRING,
      dateOfSale: DataTypes.DATE,
      quantitySold: DataTypes.INTEGER,
      unitPrice: DataTypes.FLOAT,
      discount: DataTypes.FLOAT,
      shippingCost: DataTypes.FLOAT,
      paymentMethod: DataTypes.STRING
    });
  