const salariesRepository = require('../repositories/salariesRepository');

async function getAllSalaries(req, res) {
  try {
    const salaries = await salariesRepository.findAllSalaries();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSalaryById(req, res) {
  try {
    const salary = await salariesRepository.findSalaryById(req.params.emp_no);
    if (!salary) {
      return res.status(404).json({ error: 'Salary not found' });
    }
    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createSalary(req, res) {
  try {
    const salary = await salariesRepository.createSalary(req.body);
    res.status(201).json(salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateSalary(req, res) {
  try {
    const updated = await salariesRepository.updateSalary(req.params.emp_no, req.body);
    if (!updated[0]) {
      return res.status(404).json({ error: 'Salary not found' });
    }
    res.status(200).json({ message: 'Salary updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteSalary(req, res) {
  try {
    const deleted = await salariesRepository.deleteSalary(req.params.emp_no);
    if (!deleted) {
      return res.status(404).json({ error: 'Salary not found' });
    }
    res.status(200).json({ message: 'Salary deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllSalaries,
  getSalaryById,
  createSalary,
  updateSalary,
  deleteSalary,
};
