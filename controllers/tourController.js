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
