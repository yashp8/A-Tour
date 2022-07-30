const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD,
// );

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database Connected 💾');
  })
  .catch(() => {});

const port = process.env.PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${port}`);
});
