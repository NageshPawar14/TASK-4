const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Departments = require('./departments');
const Employee = require('./employee');

const DeptManager = sequelize.define('DeptManager', {
  dept_no: {
    type: DataTypes.CHAR(4),
    primaryKey: true,
    references: {
      model: Departments,
      key: 'dept_no',
    },
  },
  emp_no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Employee,
      key: 'emp_no',
    },
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
  tableName: 'dept_manager',
  timestamps: false,
});

module.exports = DeptManager;
