const titlesRepository = require('../repositories/titlesRepository');

async function getAllTitles(req, res) {
  try {
    const titles = await titlesRepository.findAllTitles();
    res.status(200).json(titles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getTitleById(req, res) {
  try {
    const title = await titlesRepository.findTitleById(req.params.emp_no);
    if (!title) {
      return res.status(404).json({ error: 'Title not found' });
    }
    res.status(200).json(title);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createTitle(req, res) {
  try {
    const title = await titlesRepository.createTitle(req.body);
    res.status(201).json(title);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateTitle(req, res) {
  try {
    const updated = await titlesRepository.updateTitle(req.params.emp_no, req.body);
    if (!updated[0]) {
      return res.status(404).json({ error: 'Title not found' });
    }
    res.status(200).json({ message: 'Title updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteTitle(req, res) {
  try {
    const deleted = await titlesRepository.deleteTitle(req.params.emp_no);
    if (!deleted) {
      return res.status(404).json({ error: 'Title not found' });
    }
    res.status(200).json({ message: 'Title deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllTitles,
  getTitleById,
  createTitle,
  updateTitle,
  deleteTitle,
};
