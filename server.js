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
    console.log('Database Connected 💾');
  })
  .catch(() => {});

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'test2',
  price: 2500,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
