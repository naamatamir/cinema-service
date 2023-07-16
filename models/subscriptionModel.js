const mongoose = require('mongoose')
const Member = require('./memberModel')
const Movie = require('./movieModel')

const subscriptionSchema = new mongoose.Schema(
  {
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
    movies: [
      {
        movieId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Movie',
        },
        date: {
          type: Date,
        },
      },
    ],
  },
  { versionKey: false }
)

const Subscription = mongoose.model('subscription', subscriptionSchema)

module.exports = Subscription
