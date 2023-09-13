
const mongoose = require('mongoose');


const soundsSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    soundLink: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('MySounds', soundsSchema)