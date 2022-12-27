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
    NuminStock: { type: Number, default: 0 }
  }
);

//defining review schema
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
  }
)
// Create a model based on that schema
const Product = mongoose.model("Product", ProductSchema);


// export the model to server.js
module.exports = Product; 
