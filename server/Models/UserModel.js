const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const user = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 60]
    },
  },
  email: {
    type: DataTypes.STRING(30), // Mantén la longitud máxima en la definición del modelo
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'El valor no es un correo electrónico válido'
      },
      len: [5, 30], // Ajusta la longitud máxima para que coincida con la definición
      notNull: {
        msg: 'El valor no puede ser nulo'
      },
      notEmpty: true
    }
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      len: [0, 100]
    }
  },
  postalCode: {
    type: DataTypes.STRING(10),
    allowNull: true,
    validate: {
      len: [0, 10]
    }
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      len: [0, 100]
    }
  },
  province: {
    type: DataTypes.STRING(50),
    allowNull: true,
    validate: {
      len: [0, 50]
    }
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: true,
    validate: {
      len: [0, 50]
    }
  }
});

module.exports = user;
