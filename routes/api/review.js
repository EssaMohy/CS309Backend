const router = require("express").Router();
const Review = require("../../models/Review");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//add review
router.post("/", async (req, res) => {
    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;