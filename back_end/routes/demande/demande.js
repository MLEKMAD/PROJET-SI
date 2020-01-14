const express = require('express');
const router=express.Router();
const demande=require('../../controllers/demande');
const verifytoken=require('../../middleware/verifytoken');


router.get('/demande/:id_research_team', verifytoken , demande.getdemande);

router.post('/demande/:id_research_team', verifytoken , demande.postdemande);

router.put('/demande/:id_demande' , verifytoken , demande.updatedemande);

router.delete('/demande/:id_demande' , demande.deletedemande);

router.get('/alldemande',verifytoken,demande.alldemande);

module.exports=router;

