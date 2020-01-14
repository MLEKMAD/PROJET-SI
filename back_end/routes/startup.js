const express=require('express');
const router=express.Router();

const startup=require('../controllers/startup');
const verifytoken=require('../../middleware/verifytoken');

router.get('/startup', verifytoken , startup.getstartup);

router.post('/startup/:id_demande/:id_research_team', verifytoken , startup.poststartup);

module.exports=router;