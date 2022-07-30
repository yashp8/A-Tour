const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('hello from middleware.');
  next();
});

app.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: 5,
    data: {
      Data: 'data',
    },
  });
};

const getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: req,
    },
  });
};

const createTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'created',
  });
};

const patchTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'created',
  });
};

const deleteTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'deleted',
  });
};

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app.route('api/v1/tours/:id').get(getTour).patch(patchTour).delete(deleteTour);

const port = 3000;
app.listen(port, function () {
  console.log('server is running on port ${port}');
});
