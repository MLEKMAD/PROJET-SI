const express = require('express');
const router=express.Router();
const demande=require('../../controllers/demande');
const verifytoken=require('../../middleware/verifytoken');


router.get('/demande', verifytoken , demande.getdemande);

router.post('/demande?id_demande=$(id)', verifytoken , demande.postdemande);

router.put('/demande?id_demande=$(id)', verifytoken , demande.updatedemande);

router.delete('/demande?id_demande=$(id)', verifytoken , demande.deletedemande);



module.exports=router;

