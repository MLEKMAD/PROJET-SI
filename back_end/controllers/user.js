
const validatePhoneNumber = require('validate-phone-number-node-js');


exports.getuser=(req,res,next)=>{
    res.json({
        message:'get user',
        done:'true' 
                });
};

exports.postuser=(req,res,next)=>{

    req.check('full_name','full name umpty').notEmpty();
    req.check('password_hashed','password umpty').isLength({ min: 6 });
    req.check('email','email not valid').isEmail();
    req.check('phone_number_user','number not valide').isLength({min:10})
    const phone_number_valide = validatePhoneNumber.validate(req.body.phone_number_user);
    if(!phone_number_valide){
        res.status(401).json({
            message:'phone number not valide'
        })
    }
    // try nd catch error 
    var errors=req.validationErrors();
    if(errors){
        res.status(401).json({
            message:'data not valide user post'
        })
    }
    else{
        // const full_name=req.body.full_name;
        // const password_hashed=req.body.password;
        // const email_user=req.body.email_user;
    //compare with oracle bdd if existe 
    //******************* */

        res.status(201).json({
            message:'POST user',
            done:'done succesfully'
        })

    }
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