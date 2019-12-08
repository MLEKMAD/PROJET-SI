const express = require('express');
const router=express.Router();
const user=require('../../controllers/idea');

router.get('/idea',getidea);

router.post('/idea',postidea);

router.put('/idea',updateidea);

router.delete('/idea',deleteidea);



module.exports=router;

