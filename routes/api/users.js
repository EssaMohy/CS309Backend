const express = require('express');
const User = require("../../models/user");
const { findByIdAndUpdate } = require('../../models/user');
<<<<<<< HEAD
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");
=======
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndِAdmin } = require("./verifyToken");
>>>>>>> 06b59997cf1ea243d466a02083f7acf15a73d18e
const router = express.Router();
const dotenv = require("dotenv");
//@route  GET api/users
//@desc   users route
//@access Public


//UPDATE USER
<<<<<<< HEAD
//Checking if the user can make changes (auth or Admin)
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }

    //Finding user by its ID
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      //Returning the updated info for user
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
=======
router.put("./:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, 'Secret Stuff');
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
>>>>>>> 06b59997cf1ea243d466a02083f7acf15a73d18e

//lh:5000//api/users;

module.exports = router;


