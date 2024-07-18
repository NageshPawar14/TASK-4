const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Employee = require('./employee');
const Departments = require('./departments');

const DeptEmp = sequelize.define('DeptEmp', {
  emp_no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Employee,
      key: 'emp_no',
    },
  },
  dept_no: {
    type: DataTypes.CHAR(4),
    primaryKey: true,
    references: {
      model: Departments,
      key: 'dept_no',
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
  tableName: 'dept_emp',
  timestamps: false,
});

module.exports = DeptEmp;
