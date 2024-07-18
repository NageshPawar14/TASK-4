const Departments = require('../models/departments');

async function findAllDepartments() {
  return await Departments.findAll();
}

async function findDepartmentById(dept_no) {
  return await Departments.findByPk(dept_no);
}

async function createDepartment(data) {
  return await Departments.create(data);
}

async function updateDepartment(dept_no, data) {
  return await Departments.update(data, { where: { dept_no } });
}

async function deleteDepartment(dept_no) {
  return await Departments.destroy({ where: { dept_no } });
}

module.exports = {
  findAllDepartments,
  findDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
