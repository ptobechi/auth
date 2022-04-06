const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    client_name:{
        type: String,
        required: true,
    },
    client_email:{
        type: String,
        required: true,
    },
    client_phone:{
        type: String,
        required: true,
    },
    client_address:{
        type: String,
        required: true,
    },
    box_name:{
        type: String,
    },
    box_description:{
        type: String,
    },
    basket:{
        type: Array,
        required: true,
    },
    total_sum:{
        type: String,
        required: true,
    },
    delivery_date:{
        type: Date,
        required: true,
    },
    status:{
        type: Boolean,
        required: true,
        maxlength: 12
    },
    date:{
        type:Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Orders", orderSchema);
