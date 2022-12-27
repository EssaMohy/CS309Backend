const mongoose = require("mongoose");

// define the ProductSchema (the structure of the product)
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: Array },
    numReviews: { type: Number, required: true, default: 0, },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: false }
  }
);

// Create a model based on that schema
const Product = mongoose.model("Product", ProductSchema);

// export the model to server.js
module.exports = Product;