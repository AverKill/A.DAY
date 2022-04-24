const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits');

router.route('/').get(habitsController.index).post(habitsController.create);

router
  .route('/:id')
  .get(hsbitsController.show)
  .delete(habitsController.delete)
  .put(habitsController.update);

module.exports = router;