exports.checkId = (req, res, next) => {
  if (req.params.id < 0) {
    return res.status(404).json({
      status: 'error',
      message: 'invalid id',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body) {
    res.status(500).json({
      status: 'error',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: 5,
    data: {
      Data: 'data',
    },
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'req',
    },
  });
};

exports.createTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'created',
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'created',
  });
};

exports.deleteTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'deleted',
  });
};
