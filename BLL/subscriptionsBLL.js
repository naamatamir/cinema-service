const Subscription = require('../models/subscriptionModel')

const getAllSubscriptions = async () => {
  try {
    return await Subscription.find({})
      // .populate('memberId')
      // .populate('movies.movieId')
  } catch (error) {
    throw error
  }
}

const getSubscriptionById = (id) => {
  try {
    return Subscription.findById(id)
      // .populate('memberId')
      // .populate('movies.movieId')
  } catch (error) {
    throw error
  }
}

const addSubscription = async (obj) => {
  try {
    const newSubscription = new Subscription(obj)
    await newSubscription.save()
    return 'created new Subscription'
  } catch (error) {
    throw error
  }
}

const updateSubscription = async (id, obj) => {
  try {
    await Subscription.findByIdAndUpdate(id, obj)
    return `updated Subscription with id: ${id}`
  } catch (error) {
    throw error
  }
}

const deleteSubscription = async (id) => {
  try {
    await Subscription.findByIdAndDelete(id)
    return `deleted Subscription with id: ${id}`
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
}
