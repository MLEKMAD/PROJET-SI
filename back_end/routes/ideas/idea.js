const express = require('express');
const router=express.Router();
const idea=require('../../controllers/idea');
const verifytoken=require('../../middleware/verifytoken');


router.get('/idea', verifytoken , idea.getidea);

router.post('/idea', verifytoken , idea.postidea);

router.put('/idea', verifytoken , idea.updateidea);

router.delete('/idea', verifytoken , idea.deleteidea);



module.exports=router;

