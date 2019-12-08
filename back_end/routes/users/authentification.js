const express = require('express');
const router=express.Router();

router.get("/authentification",(req,res,next)=>{
    res.status(201).json({
        message:'get authentification',
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
router.post("/authentification",(req,res,next)=>{
    const full_name=req.body.full_name;
    const password_hashed=req.body.password;
    const email_user=req.body.email_user;
    const phone_number_user=req.body.phone_number_user;
//compare with oracle bdd
    console.log(req.body);
    res.status(201).json({
        message:'POST authentification',
        full_name,
        password_hashed,
        email_user,
        phone_number_user,
        done:'done succesfully'
    })
//******************* */

})

                    

module.exports=router;