const express = require("express");
const router=express.Router();
const state=require('../../controllers/state');
const verifytoken=require('../../middleware/verifytoken');

router.post('/test?id_demande=id',verifytoken , state.updatedemande);

module.exports=router;