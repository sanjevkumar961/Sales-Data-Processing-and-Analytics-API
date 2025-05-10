module.exports = (sequelize, DataTypes) =>
    sequelize.define('Customer', {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.TEXT,
    });
  