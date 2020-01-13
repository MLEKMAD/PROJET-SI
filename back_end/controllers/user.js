const bcrypt=require('bcryptjs')
const validatePhoneNumber = require('validate-phone-number-node-js');
const lencrypt=bcrypt.genSalt(10);
const oracledb=  require('oracledb'); // not sure
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const dbconfig = require('../utils/oracledb');
const jwt=require('jsonwebtoken');

exports.getuser=async(req,res,next)=>{
    const token =req.header('auth_token');
    const id_user=jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("getuser in user , id_user= ",id_user);
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute("SELECT * FROM user,university WHERE id_user= ?",[id_user]);// verify this
    await connexion.close();
    return res.json({
        message:'get user',
        users:users.rows
    });
};

exports.getalluser=async(req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute("select * from research_team ");// verify this
    await connexion.close();
    return res.json({
        message:'get user',
        users:users.rows
    });
}


exports.postuser=async(req,res,next)=>{
    req.check('name_team',' name umpty').notEmpty();
    req.check('full_name_research_team','full name umpty').notEmpty();
    req.check('password_hashed_research_team','password umpty').notEmpty();
    req.check('email_research_team','email not valid').isEmail();
    req.check('phone_number_research_team','number not valide').isLength({min:10})
    console.log('checking done');
    const phone_number_valide = validatePhoneNumber.validate(req.body.phone_number_user);
    if(!phone_number_valide){
        return res.status(400).json({
            message:'error postuser / phone number not valide '
        });
    }
    // try nd catch error 
    var errors=req.validationErrors();
    console.log(errors)
    if(errors){
        return res.status(400).json({
            message:'error postuser / data not valide user post'
        });
    }
    else{
        let connexion=await oracledb.getConnection(dbconfig);

        console.log('no error');
        if(req.body.research_team==1){
        console.log("add research_team");
        let userexiste =await connexion.execute(
            "SELECT email_research_team FROM research_team WHERE email_research_team=?",
            [req.body.email_research_team]);
        
        if(userexiste){
            await connection.close();
            return res.status(400).json({
                message :'user postuser /user already existe'
            });
        }
            const HashedPassword = await bcrypt.hash(req.body.password_hashed,lencrypt);
            //research_team and agent
                
                let user=await connexion.execute(
                    "INSERT INTO research_team  (id_research_team,name_team,full_name_research_team , password_hashed__research_team ,email_research_team, phone_number_research_team)  values(id_research_team.nextval,:name_team,:full_name_research_team ,:password_hashed__research_team ,:email_research_team, :phone_number_research_team)",
                    [   req.body.name_team,
                        req.body.full_name_research_team ,
                        HashedPassword,
                        req.body.email_research_team ,
                        req.body.phone_number_research_team,
                    ]);
                const commit = await connexion.execute('commit');

    
                await connection.close();
                return res.status(201).json({
                    message:'POST user . user created succesfully ',
                    user:user.rows
                });
            }else{
                console.log("add agent");

                let agent=await connexion.execute(
                    "INSERT INTO agent (id_agent,full_name_agent, password_hashed_agent ,email_agent, phone_number_agent)  values(id_agent.nextval,:full_name_agent, :password_hashed_agent ,:email_agent, :phone_number_agent)",
                    [   req.body.full_name_research_team ,
                        HashedPassword_research_team,
                        req.body.email_research_team ,
                        req.body.phone_number_research_team,
                    ]);
                const commit = await connexion.execute('commit');
                
    
                await connection.close();
                return res.status(201).json({
                    message:'POST user . user created succesfully ',
                    agent:agent.rows
                });
            }
    }
};

// update data user when user logged in 
exports.updateuser=async(req,res,next)=>{
    console.log("password_hashed_research_team : ",req.body.password_hashed_research_team ,"\n id_research_team : ",req.params.id_research_team)
    let connexion=await oracledb.getConnection(dbconfig);
    const HashedPassword = await bcrypt.hash(req.body.password_hashed,lencrypt);
    let users=await connexion.execute(
        "UPDATE research_team set(password_hashed_research_team=?) WHERE id_research_team= ?",
        [   req.body.password_hashed_research_team,
            req.params.id_research_team]);
    const commit = await connexion.execute('commit');
        
    await connection.close();
    return res.status(201).json({
        message:'update user successfully'
    })

//******************* */
};