const express=require('express');
const router=express.Router();

const startup=require('../controllers/startup');
const verifytoken=require('../middleware/verifytoken');

router.get('/startup/:id_research_team', verifytoken , startup.getstartup);

router.post('/startup/:id_research_team/:id_demande', verifytoken , startup.poststartup);

module.exports=router;