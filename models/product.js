const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema;

// define the ProductSchema (the structure of the product)
const productschema = new ProductSchema({
  name: {
    type: String,
    required: true
  },
  Price: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  NumOfPieces: {
    type: int,
  }
});


// Create a model based on that schema
const Product = mongoose.model("Product", ProductSchema);


// export the model to app.js
module.exports = Product; 
