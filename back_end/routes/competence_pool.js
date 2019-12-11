const express = require('express');
const router=express.Router();
const pool=require('../controllers/compentence_pool');
const verifytoken=require('../middleware/verifytoken');


router.get('/competencepool',verifytoken,pool.getpool);
router.post('/competencepool',verifytoken,pool.postpool);



module.exports=router;
