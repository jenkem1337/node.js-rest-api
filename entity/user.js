const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection')

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
  
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
  },
  
  {
    sequelize, 
    tableName: 'Denemes' 
  });
  
module.exports = User