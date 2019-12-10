const express = require('express');
const router=express.Router();
const user=require('../../controllers/auth');
const verifytoken=require('../../middleware/verifytoken');

router.post("/loggin" , verifytoken , user.postuser);

                    

module.exports=router;