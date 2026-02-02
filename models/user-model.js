const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    picture: String,
    contact: Number,
    cart: [],
    orders: [],
})

module.exports = mongoose.model('user', userSchema);
