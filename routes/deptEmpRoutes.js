const express = require('express');
const deptEmpController = require('../controllers/deptEmpController');

const router = express.Router();

router.get('/', deptEmpController.getAllDeptEmp);
router.get('/:emp_no/:dept_no', deptEmpController.getDeptEmpById);
router.post('/', deptEmpController.createDeptEmp);
router.put('/:emp_no/:dept_no', deptEmpController.updateDeptEmp);
router.delete('/:emp_no/:dept_no', deptEmpController.deleteDeptEmp);

module.exports = router;
