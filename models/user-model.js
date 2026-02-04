const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    picture: String,
    contact: Number,
    cart: [],
    orders: [],
})

module.exports = mongoose.model('user', userSchema);
