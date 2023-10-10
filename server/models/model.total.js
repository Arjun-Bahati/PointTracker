const mongoose = require("mongoose");

const TotalSchema = new mongoose.Schema({

    total: {
        type: Number,
    }
}, {timestamps: true})

module.exports = mongoose.model("Total", TotalSchema);
