const employeeRepository = require('../repositories/employeeRepository');

async function getAllEmployees(req, res) {
  try {
    const employees = await employeeRepository.findAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getEmployeeById(req, res) {
  try {
    const employee = await employeeRepository.findEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createEmployee(req, res) {
  try {
    const employee = await employeeRepository.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateEmployee(req, res) {
  try {
    const updated = await employeeRepository.updateEmployee(req.params.id, req.body);
    if (!updated[0])//this id is not here then if statement is exexuted 
    {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteEmployee(req, res) {
  try {
    const deleted = await employeeRepository.deleteEmployee(req.params.id);
    if (!deleted)//deleted contain the null value 
    //then this condition is not null but the value is null
   {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
