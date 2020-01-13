
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');


exports.login=async (req,res,next)=>{
    let connexion = oracledb.getconnexion(dbconfig);
    req.check('type','type is not selected');
    req.check('password_hashed','password not valid').isLength({ min: 6 });
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
                    const token=jwt.sign({id_user:user.rows['id_research_team']},process.env.TOKEN_SECRET);
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
                    const token=jwt.sign({id_user:user.rows['id_agent']},process.env.TOKEN_SECRET,{ expiresIn: '30min' });
                    return res.header('auth_token',token).json({
                        message:'logged succesfully '
                    })   
                }
            }

        }
    }
}




exports.logout=async (req,res,next)=>{
    const token =req.header('auth_token');
    token ="";

    res.sendStatus(204).json({
        message :"logout done"
    })


}