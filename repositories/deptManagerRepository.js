const DeptManager = require('../models/deptManager');

async function findAllDeptManagers() {
  return await DeptManager.findAll();
}

async function findDeptManagerById(dept_no, emp_no) {
  return await DeptManager.findOne({ where: { dept_no, emp_no } });
}

async function createDeptManager(data) {
  return await DeptManager.create(data);
}

async function updateDeptManager(dept_no, emp_no, data) {
  return await DeptManager.update(data, { where: { dept_no, emp_no } });
}

async function deleteDeptManager(dept_no, emp_no) {
  return await DeptManager.destroy({ where: { dept_no, emp_no } });
}

module.exports = {
  findAllDeptManagers,
  findDeptManagerById,
  createDeptManager,
  updateDeptManager,
  deleteDeptManager,
};
