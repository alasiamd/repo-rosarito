const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize({
  database: "muebles-rosarito",
  username: "postgres",
  password: "Marrosot", // Ensure this is a string
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
module.exports = sequelize;
