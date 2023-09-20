const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    txn_ref: {
        type: String
    },
    image: {
        type: String
    },
    currency: {
        type: Number,
        Default: 566
    }
})

module.exports = mongoose.model('Product', productSchema)