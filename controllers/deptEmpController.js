const deptEmpRepository = require('../repositories/deptEmpRepository');

async function getAllDeptEmp(req, res) {
  try {
    const deptEmps = await deptEmpRepository.findAllDeptEmp();
    res.status(200).json(deptEmps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getDeptEmpById(req, res) {
  try {
    const deptEmp = await deptEmpRepository.findDeptEmpById(req.params.emp_no, req.params.dept_no);
    if (!deptEmp) {
      return res.status(404).json({ error: 'DeptEmp not found' });
    }
    res.status(200).json(deptEmp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createDeptEmp(req, res) {
  try {
    const deptEmp = await deptEmpRepository.createDeptEmp(req.body);
    res.status(201).json(deptEmp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateDeptEmp(req, res) {
  try {
    const updated = await deptEmpRepository.updateDeptEmp(req.params.emp_no, req.params.dept_no, req.body);
    if (!updated[0]) {
      return res.status(404).json({ error: 'DeptEmp not found' });
    }
    res.status(200).json({ message: 'DeptEmp updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteDeptEmp(req, res) {
  try {
    const deleted = await deptEmpRepository.deleteDeptEmp(req.params.emp_no, req.params.dept_no);
    if (!deleted) {
      return res.status(404).json({ error: 'DeptEmp not found' });
    }
    res.status(200).json({ message: 'DeptEmp deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllDeptEmp,
  getDeptEmpById,
  createDeptEmp,
  updateDeptEmp,
  deleteDeptEmp,
};
