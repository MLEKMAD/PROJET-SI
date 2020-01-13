const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');

exports.getpool=async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let compentences=await connexion.execute("SELECT * FROM competences_pool");
    // const closeconn=await connection.close(); 
    return res.status(200).json({
        message:'get competences pool success',
        compentences:compentences.rows //i have to filter this value
    });
}

exports.postpool= async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    console.log(req.body.name_competences_pool,'|||' ,req.body.responsable_name)
    let compentences=await connexion.execute(
        " INSERT INTO competences_pool  (id_competences_pool,name_competences_pool,responsable_name) values(id_competences_pool.nextval,:name_competences_pool,:responsable_name)",
    [
        req.body.name_competences_pool,
        req.body.responsable_name
    ]   
    );
    // await connection.close(); 
    return res.status(200).json({
        message:'added competence to competences pool successfully',
    });
}