const express = require('express');
const deptManagerController = require('../controllers/deptManagerController');

const router = express.Router();

router.get('/', deptManagerController.getAllDeptManagers);
router.get('/:dept_no/:emp_no', deptManagerController.getDeptManagerById);
router.post('/', deptManagerController.createDeptManager);
router.put('/:dept_no/:emp_no', deptManagerController.updateDeptManager);
router.delete('/:dept_no/:emp_no', deptManagerController.deleteDeptManager);

module.exports = router;
