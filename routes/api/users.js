const express = require('express');
const router = express.Router();

// @route   Get api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test',(request,result) => {
    result.json({message : 'Users route works'});
});

module.exports = router;