const express = require('express');
const router = express.Router();
const gravatar = require("gravatar");
const { check, validationResulst } = require("express-validator/check");
const User = require("../../User");
const bcrypt = require("bcryptjson");

//@route  Post api/users
//@desc   users route
//@access Public
router.post('/', [

    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
], async (req, res) => {
    const errors = validationResulst(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, passwword } = req.body;
    try {
        //see if user exists
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        user = new User({ name, email, avatar, password })
        //Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(passwword, salt);
        await user.save();
        //Return jsonwebtoken
        res.send('User Registered')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }

});

module.exports = router;