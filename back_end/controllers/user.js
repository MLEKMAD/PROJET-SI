const bcrypt=require('bcryptjs')
const validatePhoneNumber = require('validate-phone-number-node-js');
const lencrypt=bcrypt.genSalt(10);
const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
const jwt=require('jsonwebtoken');

exports.getuser=async(req,res,next)=>{
    const token =req.header('auth_token');
    const verify = jwt.verify(token,process.env.TOKEN-SECRET);
    console.log("getuser in user , verify= ",verify);
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute("SELECT * FROM user,university WHERE id_user= ?",[verify]);// verify this
    console.log(users);
    await connexion.close();

    return res.json({
        message:'get user',
        users=users.rows
    });
};



exports.postuser=async(req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    req.check('full_name','full name umpty').notEmpty();
    req.check('password_hashed','password umpty').isLength({ min: 6 });
    req.check('email_user','email not valid').isEmail();
    req.check('phone_number_user','number not valide').isLength({min:10})
    const phone_number_valide = validatePhoneNumber.validate(req.body.phone_number_user);
    if(!phone_number_valide){
        await connection.close();
        return res.status(400).json({
            message:'error postuser / phone number not valide '
        });
    }
    // try nd catch error 
    var errors=req.validationErrors();
    if(errors){
        await connection.close();
        return res.status(400).json({
            message:'error postuser / data not valide user post'
        });
    }
    else{
        console.log('ana 9Bel userexiste');

        let userexiste =await connexion.execute(
            "SELECT email_user FROM user WHERE email_user=?",
            [req.body.email_user]);
        console.log('userexiste == ', userexiste) ;
        
        if(userexiste){
            await connection.close();
            return res.status(400).json({
                message :'user postuser /user already existe'
            });
        }else{
            const HashedPassword = await bcrypt.hash(req.body.password_hashed,lencrypt);
            //research_team and agent
            if(req.body.research_team=1){
                
                let user=await connexion.execute(
                    "INSERT INTO research_team values(full_name , password_hashed ,email_user, phone_number,name_team)",
                    [   req.body.full_name ,
                        HashedPassword,
                        req.body.email_user ,
                        req.body.phone_number,
                        req.body.name_team
                    ]);
    
                await connection.close();
                return res.status(201).json({
                    message:'POST user . user created succesfully ',
                    user=user.rows
                });
            }else{
                let agent=await connexion.execute(
                    "INSERT INTO agent values(full_name , password_hashed ,email_user, phone_number,id_user)",
                    [   req.body.full_name ,
                        HashedPassword,
                        req.body.email_user ,
                        req.body.phone_number,
                        req.body.name_team,
                        req.body.id_user
                    ]);
    
                await connection.close();
                return res.status(201).json({
                    message:'POST user . user created succesfully ',
                    agent=agent.rows
                });
            }
        }

    }
};

// update data user when user logged in 
exports.updateuser=async(req,res,next)=>{
    req.check('password_hashed','password umpty').isLength({ min: 6 });
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