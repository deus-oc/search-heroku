const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    Name : {
        type: String,
        trim: true,
        required: true
    },
    website :{
        type: String,
        trim: true,
    },
    Location: {
        type: String,
    },
    Zipcode: {
        type: Number,
    },
    Description: {
        type: String,
    },
    Owner: {
        type: String,
    },
    Established: {
        type: Number,
    }
});

module.exports = mongoose.model('search', searchSchema);