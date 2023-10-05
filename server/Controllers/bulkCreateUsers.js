const { sequelize, DataTypes } = require('sequelize');
const UserModel = require('../Models/User');


UserModel(sequelize);

async function bulkCreateUsers(users) {
  try {
    // Realiza la inserción bulkCreate
    const createdUsers = await sequelize.models.User.bulkCreate(users);

    console.log('Usuarios insertados:', createdUsers.length);
  } catch (error) {
    console.error('Error al insertar los usuarios:', error);
  }
}


module.exports = bulkCreateUsers;