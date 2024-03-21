"use strict";
const { Model,Sequelize } = require("sequelize");
const sequelize = require("../../config/db");

module.exports = sequelize.define("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  contactNumber: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
},{
  sequelize,
  freezeTableName:true,
  modelName:'users'
});

// module.exports = (sequelize, DataTypes) => {
//   class user extends Model {

//     static associate(models) {

//     }
//   }
//   user.init(
//     {
//       firstName: DataTypes.STRING,
//       lastName: DataTypes.STRING,
//       email: DataTypes.STRING,
//       contactNumber: DataTypes.STRING,
//       password: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       paranoid:true,//soft delete feature
//       freezeTableName:true,
//       modelName: "user",
//     }
//   );
//   return user;
// };
