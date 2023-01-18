const express = require('express');


const app = express();
app.get('/' , (req,res) => {

    res.json({"message" : "hello  eesha from backend"})
    
})

app.get('/tomato' , (req,res) => {

    res.json({"message" : "Hi tomato"})
    
})
app.listen(3000)
