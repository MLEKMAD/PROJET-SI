const express = require('express');
const router=express.Router();
const demande=require('../../controllers/demande');
const verifytoken=require('../../middleware/verifytoken');


router.get('/demande', verifytoken , demande.getdemande);

// router.post('/demande', verifytoken , demande.postdemande);

router.put('/demande?id_demande=id', verifytoken , demande.updatedemande);

router.delete('/demande?id_demande=id', verifytoken , demande.deletedemande);

// router.get('/alldemande',verifytoken,demande.alldemande);

module.exports=router;

