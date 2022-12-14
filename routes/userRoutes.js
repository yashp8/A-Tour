const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router(authController);

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all route
router.use(authController.protect);

router.patch('/updatePassword', authController.updatePassword);
router.patch('/updatePasswordNew', authController.updatePasswordNew);
router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe,
);
router.delete('/deleteMe', userController.deleteMe);

// Protect for admin only
router.use(authController.restrictTo('admin'));

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
