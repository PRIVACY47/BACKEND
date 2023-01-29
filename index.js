const express = require('express');

const mongoose = require('mongoose');
const morgan = require('morgan');
const notificationRouter = require('./Routes/NotificationRoute.js');
const UserRouter = require('./Routes/UserRoute.js');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

require('./db_connect.js')

app.listen(3000,(req,res)=>{console.log("app startd on port 300")})


app.use("/notifications",notificationRouter)
app.get('/' , (req,res) => {
   res.json({message : 'server is runnig'})
})