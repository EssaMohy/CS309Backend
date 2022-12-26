const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const CryptoJS = require('crypto-js'); 
const jwt = require("jsonwebtoken");

//REGISTER FUNCTION

router.post("/register", async (req, res) => {

    const newUser = new User({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
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

router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user)  {return res.status(401).json("Email is invalid")};

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, "Secret other stuff").toString(CryptoJS.enc.Utf8);
        if (decryptedPassword !== req.body.password) {
            return res.status(401).json("Password Is Incorrect");
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,

        }, "More Secret", {expiresIn:"20d"})
        const{hasheddPassword, ...others} = user._doc;
        return res.status(200).json({...others, accessToken});

        
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
































module.exports = router;









