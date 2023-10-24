const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const Categories = new Schema({
    categories:{type: String, maxLength:255},
    createAt:{type: Date, default:Date.now},
    updateAt:{type: Date, default:Date.now}
})
module.exports = mongoose.model('Categories',Categories)
