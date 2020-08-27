const { Schema, model } = require('mongoose')

const PIzzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
})

const Pizza = model('Pizza', PIzzaSchema)

module.exports = Pizza