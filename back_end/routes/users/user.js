const express = require('express');
const router=express.Router();
const user=require('../../controllers/user');
const verifytoken=require('../../middleware/verifytoken');

router.get("/authentication",verifytoken,user.getuser);
router.post("/authentication",user.postuser);
router.get("/alluser",user.getalluser);

router.put("/authentication?id_research_team=id" , verifytoken ,user.updateuser);
                    

module.exports=router;