const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

const Category = sequelize.define('Category',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
            set(value){
                this.setDataValue('name',value ? value.trim().toLowerCase() : null);
            },
        }
    },{timestamps:false});

module.exports = Category;