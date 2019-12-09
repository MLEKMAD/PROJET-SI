const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb')


exports.getidea=async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute("SELECT * FROM IDEAS WHERE id_idea= ?",[req.params.id_idea]);
// gona us JWT than add the idea 
    res.json({
        message:'get idea',
        ideas,
        done:'true' 
        });
};

exports.postidea=(req,res,next)=>{
    const full_name=req.body.full_name;
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute("INSERT INTO IDEAS WHERE id_idea= ?",[req.body.id_idea]);// re see
// gona us JWT than add the idea 
    console.log(ideas);
    if(ideas!== undefined){
        res.json({
            message:'POST idea',
            done:'done succesfully'
        })
    }
    await connection.close();
};

exports.updateidea=(req,res,next)=>{
    const name_idea=req.body.name_idea;
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute("UPDATE FROM IDEAS WHERE id_idea= ?",[req.params.id_idea]);
    //update from db
    res.json({
        message:'update idea',
        ideas,
        done:'true' 
        });
    await connection.close();
};


exports.deleteidea=(req,res,next)=>{
    //update from db
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute("DELETE FROM user WHERE id_idea= ?",[req.params.id_idea]);

    res.json({
        message:'delete idea',
        ideas,
        done:'true' 
                });
    await connection.close();
};