const Employee = require("../models/employee");

async function findAllEmployees() {
  return await Employee.findAll();
}

async function findEmployeeById(id) {
  return await Employee.findByPk(id);
}

async function createEmployee(data) {
  return await Employee.create(data);
}

async function updateEmployee(id, data) {
  return await Employee.update(data, { where: { emp_no: id } });
}

async function deleteEmployee(id) {
  return await Employee.destroy({ where: { emp_no: id } });
}

module.exports = {
  findAllEmployees,
  findEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
