const Salaries = require('../models/salary');

async function findAllSalaries() {
  return await Salaries.findAll();
}

async function findSalaryById(emp_no) {
  return await Salaries.findOne({ where: { emp_no } });
}

async function createSalary(data) {
  return await Salaries.create(data);
}

async function updateSalary(emp_no, data) {
  return await Salaries.update(data, { where: { emp_no } });
}

async function deleteSalary(emp_no) {
  return await Salaries.destroy({ where: { emp_no } });
}

module.exports = {
  findAllSalaries,
  findSalaryById,
  createSalary,
  updateSalary,
  deleteSalary,
};
