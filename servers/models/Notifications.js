const mongoose = require("mongoose");


const notificationSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    status:{
        type: Boolean
    }

});

module.exports = mongoose.model("Notifications", notificationSchema);
