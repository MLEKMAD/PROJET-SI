
const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
const jwt=require('jsonwebtoken');



exports.updatedemande=async(req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);

    const token =req.header('auth_token');
    const id_research_team = jwt.verify(token,process.env.TOKEN-SECRET);
    console.log("id_research_team :",id_research_team);
    let demandes=await connexion.execute(
        "UPDATE demandes set(state=?) WHERE id_demande= ? and id_research_team=?",
    [   req.body.state ,
        req.params.id_demande,
        id_research_team
    ]);
    const commit = await connexion.execute('commit');
    
    await connection.close();
    return res.json({
        message:'update idea in state demande',
        demandes:demandes.rows
        });

};