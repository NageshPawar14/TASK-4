const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Employee = require("./employee");

const Salary = sequelize.define(
  "Salary",
  {
    emp_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Employee,
        key: "emp_no",
      },
    },
    salary: { type: DataTypes.INTEGER, allowNull: false },
    from_date: { type: DataTypes.DATE, allowNull: false },
    to_date: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "salaries",
  }
);

module.exports = Salary;
