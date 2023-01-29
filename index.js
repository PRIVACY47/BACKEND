const express = require('express');

const mongoose = require('mongoose');
const morgan = require('morgan');
const notificationRouter = require('./Routes/NotificationRoute.js');
const UserRouter = require('./Routes/UserRoute.js');
mongoose.set('strictQuery', false)

const app = express();
app.use(express.json())
require('./db_connect.js')
app.listen(3000,(req,res)=>{console.log("app startd on port 300")})

//app.use("/User",UserRouter)
app.use("/Notifications",notificationRouter)
app.get('/' , (req,res) => {
    console.log(req)
    console.log(req.body._id)
})