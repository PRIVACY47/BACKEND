const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://siva:qGANr8VQzPaLbm0J@cluster0.lfr3l7d.mongodb.net/?retryWrites=true&w=majority').then(() => {console.log("connected to mongodb server")})