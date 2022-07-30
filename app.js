const express = require('express');
const morgan = require('morgan');

const app = express();

//Middle ware
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('hello from middleware.');
  next();
});

app.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

//Route handlers
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

const updateTour = (req, res) => {
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

const getAllusers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route not implemented yet',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route not implemented yet',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meddage: 'this route not implemented yet',
  });
};

const postUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'this route not implemented yet',
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'this route not implemented yet',
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'this route not implemented yet`',
  });
};

//routes
const tourRouter = express.router();
const userRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllusers).post(createUser);
userRouter
  .route('/')
  .route('/:id')
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//server
const port = 3000;
app.listen(port, function () {
  console.log(`server is running on port ${port}`);
});
