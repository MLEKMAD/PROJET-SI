const bcrypt=require('bcryptjs')
const validatePhoneNumber = require('validate-phone-number-node-js');
const lencrypt=bcrypt.genSalt(10);
const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
const jwt=require('jsonwebtoken');

exports.getuser=async(req,res,next)=>{
    const token =req.header('auth_token');
    const verify = jwt.verify(token,process.env.TOKEN-SECRET)
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute("SELECT * FROM user WHERE id_user= ?",[verify]);
    await connexion.close();

    return res.json({
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
            return res.status(400).json({
                message :'user postuser /user already existe'
            });
        }else{
            const HashedPassword = await bcrypt.hash(req.body.password_hashed,lencrypt);
            let user=await connexion.execute(
                "INSERT INTO users values(full_name , password_hashed ,email_user, phone_number_user)",
                [   req.body.full_name ,
                    HashedPassword,
                    req.body.email_user ,
                    req.body.phone_number_user ]);

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
    const HashedPassword = await bcrypt.hash(req.body.password_hashed,lencrypt);
    let users=await connexion.execute(
        "UPDATE user set(password_hashed=?) WHERE id_user= ?",
        [   password_hashed,
            req.params.id_user]);
//compare with oracle bdd
    await connection.close();
    return res.status(201).json({
        message:'update user successfully'
    })

//******************* */
};