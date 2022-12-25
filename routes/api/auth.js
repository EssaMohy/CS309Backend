// const express = require('express');
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const auth = require('../../middleware/auth');
// const User = require('../../models/User');
// const { check, validationResult } = require("express-validator");
// const jwt = require('jsonwebtoken');
// const config = require('config');

// //@route  GET api/auth
// //@desc   auth route
// //@access Public
// router.get(`/`, auth, async (req, res) => {

//     try {
//         const user = await User.findById(req.user.id).select('-password');
//         res.json(user);
//     } catch (error) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }

// }
// );

// //@route  Post api/users
// //@desc   Authinicate user & get token
// //@access Public
// router.post('/', [
//     check('email', 'Please include a valid email').isEmail(),
//     check('password', "Password is required").exists(),
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { name, email, password } = req.body;
//     try {

//         //See if user doesn't exist


//         let user = await User.findOne({ email });
//         if (!user) {
//             res.status(400).json({ errors: [{ msg: "Invalid Information" }] });
//         }



//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             res.status(400).json({ errors: [{ msg: "Invalid Information" }] })
//         }


//         //Return jsonwebtoken

//         const payload = {

//             user: {
//                 id: user.id,
//             }
//         }
//         jwt.sign(payload,
//             config.get('jwtSecret'),
//             { expiresIn: 90000000 },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({ token })

//             }
//         );

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("Server error");
//     }
// });

// module.exports = router;