const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllusers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .post(userController.postUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
