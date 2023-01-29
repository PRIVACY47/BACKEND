const express = require('express')
const {addNotification,ShowNotifications} = require('../RouteHandlers/Notification')
const notifications = require("../Schemas/notificationSchema")
const notificationRouter = express.Router()

notificationRouter.get('/',ShowNotifications)

notificationRouter.post("/",addNotification)

module.exports = notificationRouter