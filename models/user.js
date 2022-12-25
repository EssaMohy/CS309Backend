const mongoose = require("mongoose");
const UserSchema = mongoose.Schema;

// define the UserSchema (the structure of the User)
const userSchema = new UserSchema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
     type:Boolean,
     defult: false,
    },
  avatar: {
    type: String,
  },
});

// Create a model based on that schema
const User = mongoose.model("User", userSchema);


// export the model to server.js
module.exports = User; 

