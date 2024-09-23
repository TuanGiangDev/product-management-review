const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
});

const Products = mongoose.model("Product", productsSchema, "products");

module.exports = Products;