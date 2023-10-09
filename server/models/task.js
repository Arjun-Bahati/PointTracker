const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Must select a pizza"]
    },

    points: {
        type: Number,
        required: [true, "Must have a value"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Task", TaskSchema);
