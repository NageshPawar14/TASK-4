const DeptEmp = require('../models/deptEmp');

async function findAllDeptEmp() {
  return await DeptEmp.findAll();
}

async function findDeptEmpById(emp_no, dept_no) {
  return await DeptEmp.findOne({ where: { emp_no, dept_no } });
}

async function createDeptEmp(data) {
  return await DeptEmp.create(data);
}

async function updateDeptEmp(emp_no, dept_no, data) {
  return await DeptEmp.update(data, { where: { emp_no, dept_no } });
}

async function deleteDeptEmp(emp_no, dept_no) {
  return await DeptEmp.destroy({ where: { emp_no, dept_no } });
}

module.exports = {
  findAllDeptEmp,
  findDeptEmpById,
  createDeptEmp,
  updateDeptEmp,
  deleteDeptEmp,
};
