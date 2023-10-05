const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 60]
    },
  },
  description: {
    type: DataTypes.STRING(5000),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 0
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 0
    }
  },
  category: {
    type: DataTypes.STRING(60),
    allowNull: false,
  }
});

module.exports = products;