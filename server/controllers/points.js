const Task = require("../models/task");

module.exports = {
    findAll: (req, res) => {
        Task.find()
            .then( allTasks => res.json(allTasks))
            .catch( err => res.status(400).json(err))
    },

    findOne: (req, res) => {
        Task.findById(req.params.id)
            .then( oneTask => res.json(oneTask))
            .catch( err => res.status(400).json(err))
    },

    create: (req, res) => {
        Task.create(req.body)
            .then( newTask => res.json(newTask))
            .catch( err => res.status(400).json(err))
    },

    update: (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body)
            .then( updatedTask => res.json(updatedTask))
            .catch( err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Task.findByIdAndDelete(req.params.id)
            .then( deletedTask => res.json(deletedTask))
            .catch( err => res.status(400).json(err))
    }
}