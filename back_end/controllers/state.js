
const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
const jwt=require('jsonwebtoken');



exports.updatedemande=async(req,res,next)=>{
    const token =req.header('auth_token');
    const verify = jwt.verify(token,process.env.TOKEN-SECRET);
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "UPDATE demandes set(state) WHERE id_demande= ?,id_user=?",
    [   req.body.state ,
        req.params.id_demande,
        verify
    ]);
    await connection.close();
    return res.json({
        message:'update idea in state demande',
        demandes:demandes.rows
        });

};