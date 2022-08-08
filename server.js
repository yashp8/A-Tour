/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD,
// );

// const DB = `mongodb://docker:mongopw@localhost:55000`;
const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB).then(() => {
  console.log(`Database Connected`);
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}
      ____
     ||"0||
     ||__||
     [.=- ] v1.0
  `);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
