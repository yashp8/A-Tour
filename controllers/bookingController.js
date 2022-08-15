const stripe = require('stripe')(
  'sk_test_51LVHvGDGVrnfuHgJTEXAqRyxfnBwZCMaTgpdZIZNPbqceteUpybAYqHoSM0I3rIStkB3RvFifsZnyI30usrIaQF300chrFLw5x',
);
const factory = require('./handlerFactory');
const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.tourId);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/?tour=${
      req.params.tourId
    }&user=${req.user.id}&price={tour.price}`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          unit_amount: tour.price * 100,
          product_data: {
            name: `${tour.name} Tour`,
            description: tour.symmary,
          },
        },
        quantity: 1,
      },
    ],
  });
  res.status(200).json({
    status: 'success',
    session,
  });
});

exports.createBookingCkeckout = catchAsync(async (req, res, next) => {
  // unsecure
  const { tour, user, price } = req.query;
  if (!tour || !user || !price) return next();
  await Booking.create({ tour, user, price });
  res.redirect(req.originalUrl.split('?')[0]);
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBooking = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
