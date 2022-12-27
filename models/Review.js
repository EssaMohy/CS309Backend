const mongoose = require("mongoose");

//defining review schema
const ReviewSchema = mongoose.Schema(
    {
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
    }
);

// Create a model based on that schema
const Review = mongoose.model("Review", ReviewSchema);

// export the model to server.js
module.exports = Review;