//  for notifications in the app 

// showNotifications send back the one notification in

// addnotification create a new notification



const notifications = require("../Schemas/notificationSchema")

const ShowNotifications = async(req,res)=>{
    try {
       
        let n =  await notifications.find({})
        
        res.json({notfications:n})
    } 
    catch(err) {
        res.status(500).send('server error')
    }
       
}

const addNotification = async(req,res)=>{
    try {
       let n = await notifications.create({
            description : req.body.description
        })
        res.status(201).send(n)
    } 
    catch(err) {
        res.status(500).send('server error')
    }
    }
       

module.exports = {addNotification,ShowNotifications}