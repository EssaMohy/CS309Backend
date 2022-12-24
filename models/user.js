const mongoose = require("mongoose");
const UserSchema = mongoose.Schema;

// define the UserSchema (the structure of the user)
const Userschema = new UserSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
});





// export the model to app.js
//Feh hena error
module.exports= User = mongoose.model('User', UserSchema);
