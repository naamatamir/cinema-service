const express = require('express')
const subscriptionsBLL = require('../BLL/subscriptionsBLL')

const subscriptionsRouter = express.Router()

//Entry Point 'http://localhost:8000/subscriptions'

subscriptionsRouter.route('/').get(async (req, res) => {
  try {
    const subscriptions = await subscriptionsBLL.getAllSubscriptions()
    res.json(subscriptions)
  } catch (error) {
    res.json(error)
  }
})

subscriptionsRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params
    const subscription = await subscriptionsBLL.getSubscriptionById(id)
    res.json(subscription)
  } catch (error) {
    res.json(error)
  }
})

subscriptionsRouter.route('/').post(async (req, res) => {
  try {
    const obj = req.body
    const result = await subscriptionsBLL.addSubscription(obj)
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

subscriptionsRouter.route('/:id').put(async (req, res) => {
  try {
    const { id } = req.params
    const obj = req.body
    const result = await subscriptionsBLL.updateSubscription(id, obj)
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

subscriptionsRouter.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params
    const result = await subscriptionsBLL.deleteSubscription(id)
    res.json(result)
  } catch (error) {
    res.json(`the error is: ${error}`)
  }
})

module.exports = subscriptionsRouter
