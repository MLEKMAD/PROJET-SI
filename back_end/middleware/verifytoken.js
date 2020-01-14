const jwt=require('jsonwebtoken');


module.exports=  (req,res,next)=>{

        const token =req.header('auth_token')?req.header('auth_token').split(' ')[1]:false;
        if(!token){
            res.status(400).json({
                message:"user not auth don't have token"
            })
        }
        else{
            const verify = jwt.verify(token,process.env.TOKEN_SECRET);
            if(verify){
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