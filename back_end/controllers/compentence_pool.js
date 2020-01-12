const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');

exports.getpool=async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let compentences=await connexion.execute("SELECT * FROM COMPETENCES_POOL");
    await connection.close(); 
    return res.status(200).json({
        message:'get competences pool success',
        compentences
    });
}

exports.postpool= async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let compentences=await connexion.execute(" INSERT INTO COMPETENCES_POOL values(name_pool)");
    await connection.close(); 
    return res.status(200).json({
        message:'post competences pool success',
    });
}