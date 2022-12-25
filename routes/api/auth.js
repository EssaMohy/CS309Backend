const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//@route  GET api/auth
//@desc   auth route
//@access Public
router.get(`/`, auth, (req, res) => res.send('auth route'));

module.exports = router;