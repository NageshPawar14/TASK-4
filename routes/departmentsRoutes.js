const express = require('express');
const departmentsController = require('../controllers/departmentsController');

const router = express.Router();

router.get('/', departmentsController.getAllDepartments);
router.get('/:dept_no', departmentsController.getDepartmentById);
router.post('/', departmentsController.createDepartment);
router.put('/:dept_no', departmentsController.updateDepartment);
router.delete('/:dept_no', departmentsController.deleteDepartment);

module.exports = router;
