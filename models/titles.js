const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Employee = require('./employee'); // Ensure this path is correct

const Title = sequelize.define('Title', {
  emp_no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Employee,
      key: 'emp_no',
    },
  },
  title: {
    type: DataTypes.STRING(50), // Adjust the length as needed
    allowNull: false,
  },
  from_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  to_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'titles',
  timestamps: false,
});

module.exports = Title;
