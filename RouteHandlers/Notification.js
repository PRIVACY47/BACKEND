const notifications = require("../Schemas/notificationSchema")

const ShowNotifications = async(req,res)=>{
        var querry = notifications.find({}).sort('-date').limit(1)
        querry.exec((err,docs)=>{console.log(docs)})
}

const addNotification = async(req,res)=>{
    console.log("heollo world")
        await notifications.create({
            description : req.body.description
        })
}

module.exports = {addNotification,ShowNotifications}