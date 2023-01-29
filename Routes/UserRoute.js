const express = require("express")
const SignUp = require("../RouteHandlers/user")

const UserRouter = express.Router()

UserRouter.get("/SignUp",SignUp)

module.exports = UserRouter