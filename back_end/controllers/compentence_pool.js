const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');

exports.getpool=async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let compentences=await connexion.execute("SELECT (name_pool,responsable_name) FROM competences_pool");
    await connection.close(); 
    return res.status(200).json({
        message:'get competences pool success',
        compentences:compentences.rows //i have to filter this value
    });
}

exports.postpool= async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let compentences=await connexion.execute(" INSERT INTO competences_pool values(id_competences_pool.nextval,name_pool,responsable_pool)");
    await connection.close(); 
    return res.status(200).json({
        message:'added competence to competences pool successfully',
    });
}