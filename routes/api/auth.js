const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const CryptoJS = require('crypto-js'); 

//REGISTER FUNCTION

router.post("/register", async (req, res) => {

    const newUser = new User({

        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,'Secret Stuff'),
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

router.post("/login", async(req,res)=>{

    try {
        
        const user = await User.findOne({email: req.body.email, });
        //Check if the user exists
        !user && res.status(401).json("Please Enter a valid Email");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, 'Secret Stuff');

        const OriginalPassword = hashedPassword;
        //Check if the password is correct
        OriginalPassword != req.body.password && res.status(401).json("Password is incorrect");

        const {password, ...others} = user._doc;

        //If both correct
        res.status(200).json(others);


    } catch (err) {
        res.status(500).json(err);
    }
} );

module.exports = router;









