const express = require('express');
const router = express.Router();

// @route   Get api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test',(request,result) => {
    result.json({message : 'Profile route works'});
});

module.exports = router;