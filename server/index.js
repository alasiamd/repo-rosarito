const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const router = require('./Routes/Routes.js');
const sequelize = require('./db.js');
const UserModel = require('./Models/UserModel');
const Products = require('./Models/ProductsModel');
const Category = require('./Models/CategoryModel');

// Define the relationships after importing the models
UserModel.hasMany(Products); // Corrected here
Products.belongsTo(UserModel);
Category.hasMany(Products);
Products.belongsTo(Category);

app.use(router);



app.listen(3001, () => {
  // Connect to the database
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection to the database established successfully.');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
  console.log('Server running on port 3001');
});