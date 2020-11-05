const express = require('express');
const router = express.Router();

// @route   Get api/posts/test
// @desc    Tests posts route
// @access  Public
router.get('/test',(request,result) => {
    result.json({message : 'Posts route works'});
});

module.exports = router;