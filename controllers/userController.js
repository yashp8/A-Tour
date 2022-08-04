const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const filterObj = (obj, ...allowedField) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedField.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllusers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError('This rout is restricted for update password', 400),
    );
  }
  const filteredBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route not implemented yet',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meddage: 'this route not implemented yet',
  });
};

exports.postUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'this route not implemented yet',
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'this route not implemented yet',
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'this route not implemented yet`',
  });
};
