const Total = require("../models/model.total");

module.exports = {
    findAll: (req, res) => {
        Total.find()
            .then( allTotals => res.json(allTotals))
            .catch( err => res.status(400).json(err))
    },

    findOne: (req, res) => {
        Total.findById(req.params.id)
            .then( oneTotal => res.json(oneTotal))
            .catch( err => res.status(400).json(err))
    },

    create: (req, res) => {
        Total.create(req.body)
            .then( newTotal => res.json(newTotal))
            .catch( err => res.status(400).json(err))
    },

    update: (req, res) => {
        Total.findByIdAndUpdate({ _id: req.params.id}, req.body, {
            new: true,
            runValidators: true,
        })
            .then( updatedTotal => res.json(updatedTotal))
            .catch( err => res.status(400).json(err))
    },
    
    delete: (req, res) => {
        Total.findByIdAndDelete(req.params.id)
            .then( deletedTotal => res.json(deletedTotal))
            .catch( err => res.status(400).json(err))
    }
}