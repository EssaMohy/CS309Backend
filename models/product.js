const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the product)
const productschema = new Schema({
  title: String,
  summary: String,
  body: String,
});
 
 
// Create a model based on that schema
const Product = mongoose.model("Product", productschema);
 
 
// export the model to app.js
module.exports = Product; 