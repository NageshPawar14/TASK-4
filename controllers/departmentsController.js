const departmentsRepository = require('../repositories/departmentsRepository');

async function getAllDepartments(req, res) {
  try {
    const departments = await departmentsRepository.findAllDepartments();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getDepartmentById(req, res) {
  try {
    //problem this code
    //////////////////
    const department = await departmentsRepository.findDepartmentById(req.params.dept_no);
    /////////////////

    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createDepartment(req, res) {
  try {
    const department = await departmentsRepository.createDepartment(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateDepartment(req, res) {
  try {
    const updated = await departmentsRepository.updateDepartment(req.params.dept_no, req.body);
    if (!updated[0]) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json({ message: 'Department updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteDepartment(req, res) {
  try {
    const deleted = await departmentsRepository.deleteDepartment(req.params.dept_no);
    if (!deleted) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
