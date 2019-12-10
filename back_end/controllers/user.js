
const validatePhoneNumber = require('validate-phone-number-node-js');


exports.getuser=async(req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute("SELECT * FROM user WHERE id_user= ?",[req.params.user_id]);
    await connexion.close();
    res.json({
        message:'get user',
        users
    });
};

exports.postuser=async(req,res,next)=>{
    req.check('full_name','full name umpty').notEmpty();
    req.check('password_hashed','password umpty').isLength({ min: 6 });
    req.check('email_user','email not valid').isEmail();
    req.check('phone_number_user','number not valide').isLength({min:10})
    const phone_number_valide = validatePhoneNumber.validate(req.body.phone_number_user);
    const EmailExiste= await connexion.execute(
        "SELECT email_user FROM user where email_user =? ",
        [mail_user]);
    if(EmailExiste){
        return req.status(400).json({
            message :'error postuser /  email already existe'
        })
    }
    
    
    if(!phone_number_valide){
        return res.status(400).json({
            message:'error postuser / phone number not valide '
        });
    }
    // try nd catch error 
    var errors=req.validationErrors();
    if(errors){
        return res.status(400).json({
            message:'error postuser / data not valide user post'
        });
    }
    else{
        let connexion=await oracledb.getConnection(dbconfig);
        let userexiste =await connexion.execute(
            "SELECT email_user FROM user WHERE email_user=?",
            [req.body.email_user]);
        if(userexiste){
            let user=await connexion.execute(
                "INSERT INTO users values(full_name , password_hashed ,email_user, phone_number_user)",
                [   users.full_name ,
                    users.password_hashed ,
                    users.email_user ,
                    users.phone_number_user ]);

            await connection.close();
            return res.status(201).json({
                message:'POST user . user created succesfully ',
                user
            })
        }
    }
};


exports.updateuser=async(req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute(
        "UPDATE user set(password_hashed=?) WHERE id_user= ?",
        [   req.body.password_hashed,
            req.params.id_user]);
//compare with oracle bdd
    await connection.close();
    return res.status(201).json({
        message:'update user',
        users
    })

//******************* */
};