const mongoose = require("mongoose");

const boxSchema = new mongoose.Schema({
    box:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    items:{
        type: Array,
        required: true
    },
    total_sum:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Box", boxSchema);
