const express = require('express');
const router=express.Router();

router.get("/authentification",(req,res,next)=>{
    res.send('hello');
})