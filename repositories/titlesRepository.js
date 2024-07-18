const Titles = require('../models/titles');

async function findAllTitles() {
  return await Titles.findAll();
}

async function findTitleById(emp_no) {
  return await Titles.findOne({ where: { emp_no } });
}

async function createTitle(data) {
  return await Titles.create(data);
}

async function updateTitle(emp_no, data) {
  return await Titles.update(data, { where: { emp_no } });
}

async function deleteTitle(emp_no) {
  return await Titles.destroy({ where: { emp_no } });
}

module.exports = {
  findAllTitles,
  findTitleById,
  createTitle,
  updateTitle,
  deleteTitle,
};
