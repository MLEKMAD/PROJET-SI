const express = require('express');
const router=express.Router();
const user=require('../../controllers/user');
const verifytoken=require('../../middleware/verifytoken');

router.get("/authentication",user.getuser);
router.post("/authentication",user.postuser);

router.put("/authentication" , verifytoken ,user.updateuser);
                    

module.exports=router;