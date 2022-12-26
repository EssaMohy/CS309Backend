const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const CryptoJS = require('crypto-js'); 
const jwt = require("jsonwebtoken");

//REGISTER FUNCTION

router.post("/register", async (req, res) => {

    const newUser = new User({

        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, "Secret stuff"),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err);
    };
}
);
//LOGIN FUNCTION

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                email: req.body.email
            }
        );

        !user && res.status(401).json("Enter a valid Email");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword !== inputPassword && 
            res.status(401).json("Password is incorrect");

        const accessToken = jwt.sign({

            id: user._id,
            isAdmin: user.isAdmin, 
        }, process.env.JWT_SEC, {expiresIn:"20d"});


        const {password, ...others} = user._doc;

        //If both correct
        res.status(200).json({...others, accessToken});


    } catch (err) {
        res.status(500).json(err);
    }
} );

module.exports = router;









