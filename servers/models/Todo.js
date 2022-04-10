const mongoose = require("mongoose");


const todoListSchema = new mongoose.Schema({
    client_email:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    body:{
        type: Array,
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

module.exports = mongoose.model("TodoList", todoListSchema);
