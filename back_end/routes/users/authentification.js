const express = require('express');
const router=express.Router();

router.get("/authentification",(req,res,next)=>{
    res.status(201).json({
        message:'first get',
        get:[{
            id_user:1,
            full_name:'hatim lahlali',
            password_hashed:'******',
            email_user:'hatimlahlali.13@outlook.fr',
            phone_number_user:'0664065964'
            }],
        done:'true' 
                });
                    });


                    

module.exports=router;