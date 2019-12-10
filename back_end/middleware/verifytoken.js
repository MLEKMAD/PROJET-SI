


const jwt=require('jsonwebtoken');


exports.verifyjwt=(req,res,next)=>{

    const token =req.header('auth_token');
    if(!token){
        return res.status(400).json({
            message:"user not auth don't have token"
        })
    }
    else{
        const verify = jwt.verify(token,process.env.TOKEN-SECRET);
        if(verify){
            res.json({
                message:"user have a token and it's valide he has access to this page "
            })
            next();
        }
        else
        {
            res.status(400).json({
                message:'user not auth invalide in the token'
            });
        }
    }
}