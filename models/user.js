const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the user)
const Userschema = new Schema({
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
});
 

constUser = mongoose.model("User", Userschema);
 
 
// export the model
module.exports = User; 