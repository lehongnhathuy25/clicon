const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
    name: {type: String,maxLength:255},
    description: {type: String,maxLength:600},
    thumbnail: {type: String,maxLength: 255}
})