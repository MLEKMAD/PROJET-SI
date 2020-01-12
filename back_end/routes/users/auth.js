const express = require('express');
const router=express.Router();
const auth=require('../../controllers/auth');
const verifytoken=require('../../middleware/verifytoken');

router.post("/login" , verifytoken , auth.login);

module.exports=router;