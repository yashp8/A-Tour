const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

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

//routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//server
module.exports = app;
