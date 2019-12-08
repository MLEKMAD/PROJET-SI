const express = require('express');
const router=express.Router();
const idea=require('../../controllers/idea');

router.get('/idea',idea.getidea);

router.post('/idea',idea.postidea);

router.put('/idea',idea.updateidea);

router.delete('/idea',idea.deleteidea);



module.exports=router;

