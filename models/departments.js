const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Departments = sequelize.define('Departments', {
  dept_no: {
    type: DataTypes.CHAR(4),
    allowNull: false,
    unique: true, // Ensure dept_no is unique but not a primary key
    // autoIncrement: true
  },
  dept_name: {
    type: DataTypes.STRING(40),
    primaryKey: true, // Set dept_name as the primary key
  },
}, {
  tableName: 'departments',
  timestamps: false,
});

module.exports = Departments;
