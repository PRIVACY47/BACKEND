import express from "express";


const app = express();
app.get('/' , (req,res) => {

    res.json({"message" : "hello from backend"})
    
})
app.listen(3000)