


exports.getuser=(req,res,next)=>{
    res.json({
        message:'get user',
        done:'true' 
                });
};

exports.postuser=(req,res,next)=>{
    const full_name=req.body.full_name;
    const password_hashed=req.body.password;
    const email_user=req.body.email_user;
    const phone_number_user=req.body.phone_number_user;
//compare with oracle bdd if existe 
    res.status(201).json({
        message:'POST user',
        full_name,
        password_hashed,
        email_user,
        phone_number_user,
        done:'done succesfully'
    })
//******************* */
};

exports.updateuser=(req,res,next)=>{
    const email_user=req.body.email_user;
//compare with oracle bdd
    console.log(req.body);
    res.status(201).json({
        message:'update user',
        done:'done succesfully'
    })
//******************* */
};