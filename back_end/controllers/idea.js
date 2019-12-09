const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb')


exports.getidea=async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute(
        "SELECT * FROM ideas WHERE id_idea= ?",
        [req.params.id_idea]);
// gona us JWT than add the idea 
    res.json({
        message:'get idea',
        ideas,
        done:'true' 
        });
};

exports.postidea=async (req,res,next)=>{
    req.check('name_idea','idea name umpty').notEmpty();
    req.check('description','description umpty').isLength({ min: 20 });
    req.check('type_idea','email not valid').isEmail();
    req.check('state','state null').notEmpty();
    // try nd catch error 
    var errors=req.validationErrors();
    if(errors){
        res.status(401).json({
            message:'data not valide idea post'
        });
    }
    else{
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute(
        "INSERT INTO ideas VALUES (name_idea,description,type_idea,state) WHERE id_idea= ?",
        [   req.body.name_idea ,
            req.body.description ,
            req.body.type_idea , 
            req.body.state
        ]);
// gona us JWT than add the idea 
    if(ideas!== undefined){
        res.json({
            message:'POST idea',
            done:'done succesfully'
        })
    }
    await connection.close();
    }
};

exports.updateidea=async(req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute(
        "UPDATE ideas set(name_idea,description) WHERE id_idea= ?",
    [   req.body.name_idea ,
        req.body.description,
        req.params.id_idea
    ]);

    await connection.close();
    return res.json({
        message:'update idea',
        ideas,
        done:'true' 
        });

};


exports.deleteidea=async(req,res,next)=>{
    //update from db
    let connexion=await oracledb.getConnection(dbconfig);
    let ideas=await connexion.execute(
        "DELETE FROM user WHERE id_idea= ?",
        [req.params.id_idea]);

    res.json({
        message:'delete idea',
        ideas,
        done:'true' 
    });
    await connection.close();
};