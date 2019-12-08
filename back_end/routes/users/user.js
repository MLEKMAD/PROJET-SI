const express = require('express');
const router=express.Router();
const user=require('../../controllers/user');

router.get("/authentification",user.getuser);
router.post("/authentification",user.postuser);

                    

module.exports=router;