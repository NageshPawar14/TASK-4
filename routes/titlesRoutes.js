const express = require('express');
const titlesController = require('../controllers/titlesController');

const router = express.Router();

router.get('/', titlesController.getAllTitles);
router.get('/:emp_no', titlesController.getTitleById);
router.post('/', titlesController.createTitle);
router.put('/:emp_no', titlesController.updateTitle);
router.delete('/:emp_no', titlesController.deleteTitle);

module.exports = router;
