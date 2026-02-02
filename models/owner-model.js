const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    picture: String,
    contact: Number,
    products: [],
})

module.exports = mongoose.model('user', ownerSchema);
