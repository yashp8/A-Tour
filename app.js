const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middle ware
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//routes middleware
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'failed',
  //   message: `can't find ${req.originalUrl} on server`,
  // });

  // const err = new Error(`can't find ${req.originalUrl} on server`);
  // err.statusCode = 404;
  // err.status = 'failed';
  next(new AppError(`can't find ${req.originalUrl} on server`, 400));
});

app.use(globalErrorHandler);

//server
module.exports = app;
