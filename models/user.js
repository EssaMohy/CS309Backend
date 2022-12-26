const mongoose = require("mongoose");
const UserSchema = mongoose.Schema;

// define the UserSchema (the structure of the User)
const userSchema = new UserSchema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
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
  adress: {
    type: String,
    defult: "Egypt",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
  },
});

// Create a model based on that schema
const User = mongoose.model("User", userSchema);


// export the model to server.js
module.exports = User;

