const express = require('express');
const router = express.Router();

// @route GET api/conracts
//@desc Get all users contacts
// @access private

router.get('/',(req, res) => {
  res.send('Get all users contacts')
});

// @route POSt api/contacts
//@desc ADD contacts
// @access private

router.post('/',(req, res) => {
  res.send('ADD contact')
});

// @route put api/contacts/:id
//@desc update contact
// @access private

router.post('/',(req, res) => {
  res.send('update contact')
});

// @route delete api/contacts/:id
//@desc Delete contact
// @access private

router.post('/',(req, res) => {
  res.send('Delete contact')
});

module.exports = router;