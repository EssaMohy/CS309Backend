const express = require('express');
const User = require("../../models/user");
const { findByIdAndUpdate } = require('../../models/user');
const {verifyToken, verifyTokenAndAuthorization} = require("./verifyToken");
const router = express.Router();
//@route  GET api/users
//@desc   users route
//@access Public


//UPDATE USER
router.put("./:id", verifyTokenAndAuthorization , async (req,res)=>{
    if(req.body.password){
        req.body.password =  CryptoJS.AES.encrypt(req.body.password, 'Secret Stuff');
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//lh:5000//api/users;

module.exports = router;


