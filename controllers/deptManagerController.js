const deptManagerRepository = require('../repositories/deptManagerRepository');

async function getAllDeptManagers(req, res) {
  try {
    const deptManagers = await deptManagerRepository.findAllDeptManagers();
    res.status(200).json(deptManagers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getDeptManagerById(req, res) {
  try {
    const deptManager = await deptManagerRepository.findDeptManagerById(req.params.dept_no, req.params.emp_no);
    if (!deptManager) {
      return res.status(404).json({ error: 'DeptManager not found' });
    }
    res.status(200).json(deptManager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createDeptManager(req, res) {
  try {
    const deptManager = await deptManagerRepository.createDeptManager(req.body);
    res.status(201).json(deptManager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateDeptManager(req, res) {
  try {
    const updated = await deptManagerRepository.updateDeptManager(req.params.dept_no, req.params.emp_no, req.body);
    if (!updated[0]) {
      return res.status(404).json({ error: 'DeptManager not found' });
    }
    res.status(200).json({ message: 'DeptManager updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteDeptManager(req, res) {
  try {
    const deleted = await deptManagerRepository.deleteDeptManager(req.params.dept_no, req.params.emp_no);
    if (!deleted) {
      return res.status(404).json({ error: 'DeptManager not found' });
    }
    res.status(200).json({ message: 'DeptManager deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllDeptManagers,
  getDeptManagerById,
  createDeptManager,
  updateDeptManager,
  deleteDeptManager,
};
