
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');


exports.login=async (req,res,next)=>{
    let connexion = oracledb.getconnexion(dbconfig);
    req.check('password_hashed','password umpty').isLength({ min: 6 });
    req.check('email_user','email not valid').isEmail();
    if(req.validationErrors())
    {
        return res.status(400).json({
            message:'error login / from validator error'
        })
    }
    else
    {
        let userexiste =await connexion.execute(
            "SELECT user_id,password_hashed,email_user FROM user WHERE email_user=?",
            [req.body.email_user]);
        if(!userexiste)
        {
            return res.status(400).json({
                message:"error login / from user don't existe",
                user:'None'
            })
        }
        else
        {
            const ValidPassword=await bcrypt.compare(req.body.password_hashed , userexiste.password_hashed);
            if(!ValidPassword){
                 return res.status(400).json({
                     message:'password not valid form login '
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