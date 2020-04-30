const express = require('express');
const router = express.Router();

// @route Get api/auth
//@desc get logged in user
// @access Private

router.get('/',(req, res) => {
  res.send('get logged in user')
});

//@route post api/auth
//@desc  auth user and get token
// @access Private

router.post('/',(req, res) => {
  res.send('log in user')
});

module.exports = router;