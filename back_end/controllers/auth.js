
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');


exports.login=async (req,res,next)=>{
    let connexion = oracledb.getconnexion(dbconfig);
    req.check('type','type is not selected');
    req.check('password_hashed','password umpty').isLength({ min: 6 });
    req.check('email_user','email not valid').isEmail();
    if(req.validationErrors())
    {
        await connection.close();
        return res.status(400).json({
            message:'error login / from validator error'
        })
    }
    else
    {
        if(type==1)//research team
        {

            let userexiste =await connexion.execute(
                "SELECT password_hashed_research_team , email_research_team FROM research_team WHERE email_user=?",
                [req.body.email_user]);
            console.log('user existe in auth.js value of promise research team userexist \n ',userexiste);
            if(!userexiste)
            {
                await connection.close();
                return res.status(400).json({
                    message:"error login / from user don't existe",
                    user:'None'
                })
            }
            else
            {
                await connection.close();
                const ValidPassword=await bcrypt.compare(req.body.password_hashed , userexiste.password_hashed);
                if(!ValidPassword){
                     return res.status(400).json({
                         message:'password not valid form login',
                         user:'None'
                        });
                }
                else{
                    //i have to console log the user to see the composante of it
                    const token=jwt.sign({id_user:user[0][0]['id_user']},process.env.TOKEN_SECRET);
                    return res.header('auth_token',token).json({
                        message:'logged succesfully '
                    })   
                }
            }
        }
        else{
            let userexiste =await connexion.execute(
                "SELECT password_hashed_agent,email_Agent FROM agent WHERE email_user=?",
                [req.body.email_user]);
            console.log('user existe in auth.js value of promise Agent userexist \n ',userexiste);
            if(!userexiste)
            {
                await connection.close();
                return res.status(400).json({
                    message:"error login / from user don't existe",
                    user:'None'
                })
            }
            else
            {
                await connection.close();
                const ValidPassword=await bcrypt.compare(req.body.password_hashed , userexiste.password_hashed);
                if(!ValidPassword){
                     return res.status(400).json({
                         message:'password not valid form login',
                         user:'None'
                        });
                }
                else{
                    //i have to console log the user to see the composante of it
                    const token=jwt.sign({id_user:user[0][0]['id_user']},process.env.TOKEN_SECRET);
                    return res.header('auth_token',token).json({
                        message:'logged succesfully '
                    })   
                }
            }

        }
    }
}