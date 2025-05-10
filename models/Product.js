module.exports = (sequelize, DataTypes) =>
    sequelize.define('Product', {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
      category: DataTypes.STRING,
    });
  