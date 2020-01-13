const express = require('express');
const router=express.Router();
const auth=require('../../controllers/auth');
const verifytoken=require('../../middleware/verifytoken');

router.post("/login" , auth.login);
router.post("/logout",verifytoken,auth.logout);

module.exports=router;