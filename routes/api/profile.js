const express = require('express');
const router = express.Router();

// @route           GET api/profile/test
// @description     Tests Posts Route 
// @access          Public
router.get('/test',(req,res)=>res.json({msg: "Profile works"}));

module.exports = router;