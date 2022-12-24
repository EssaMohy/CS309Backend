// mongoose
const mongoose = require("mongoose");
const config = require('config');
const db = config.get('mongoURI');


mongoose.set('strictQuery', true);
const connectDB = async () => {

try{
  await mongoose.connect("mongodb+srv://allaa:1234@project309.crnphld.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, //useCreateIndex: true
});


console.log('Mongo is connected');
}

catch(err){
console.error(err.message);
process.exit(1);
}};

module.exports = connectDB;