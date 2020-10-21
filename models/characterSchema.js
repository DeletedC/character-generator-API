const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name1: {
        type: String,
        required: true,
        unique: false
    },
    name2: {
        type: String,
        required: false,
        unique: false
    },
    name3: {
        type: String,
        required: false,
        unique: false
    },
    name4: {
        type: String,
        required: true,
        unique: false
    },
    age: {
        type: Number,
        required: false,
        unique: false
    },
    height: {
        type: Number,
        required: false,
        unique: false
    },
    weight: {
        type: Number,
        required: false,
        unique: false
    },
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;