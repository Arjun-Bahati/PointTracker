const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "A task must exist"],
        minlength: [5, "A task must be at least 5 characters."]
    },

    points: {
        type: Number,
        required: [true, "You need to add a value!"],
        min: [1, "Must be a number greater than 0"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Task", TaskSchema);

