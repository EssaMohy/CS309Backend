const express = require('express');
const router = express.Router();
const gravatar = require("gravatar");
const Product = require("../../Product");
const { check, validationResulst } = require("express-validator/check");
//@route  Post api/Product
//@desc   test route
//@access Public
router.post(`/`, [
    check("name", "Name is required").not().isEmpty(),
    check("img", "Image is required").not().isEmpty(),
    check("price", "Price is required").not().isEmpty(),

], async (req, res) => {
    const errors = validationResulst(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, price } = req.body;
    try {
        let product = await Product.findOne({ name });
        if (product) {
            product.NumOfPieces += product.NumOfPieces;
        }
        product = new Product({ name, price, img, desc })
        await product.save();
        res.send('Product Inserted')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }

});

module.exports = router;