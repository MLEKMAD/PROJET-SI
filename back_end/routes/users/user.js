const express = require('express');
const router=express.Router();
const user=require('../../controllers/user');
const verifytoken=require('../../middleware/verifytoken');

router.get("/authentification",user.getuser);
router.post("/authentification",user.postuser);

router.put("/authentification" , verifytoken , user.updateuser);
                    

module.exports=router;