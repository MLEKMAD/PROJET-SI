const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
// const transport=require('../utils/nodemailer');
const jwt=require('jsonwebtoken');


exports.alldemande=async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "SELECT (name_demande,description,type_idea,state) FROM demandes ");
    await connexion.close();
// gona us JWT than add the idea 
    return res.json({
        message:'get all idea',
        demandes:demandes.rows
        });
};

exports.getdemande=async (req,res,next)=>{//verifie token
    const token =req.header('auth_token');
    const verify = jwt.verify(token,process.env.TOKEN_SECRET);
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "SELECT (name_demande,description,type_idea,state) FROM demandes WHERE id_research_team= ?",
        [verify]);
    await connexion.close();
// gona us JWT than add the idea 
    return res.json({
        message:'get all idea',
        demandes:demandes.rows
        });
};

exports.postdemande=async (req,res,next)=>{
    req.check('name_demande','idea name umpty').notEmpty();
    req.check('description','description umpty').isLength({ min: 20 });
    req.check('type_idea','email not valid').isEmail();
    req.check('state','state null').notEmpty();
    // try nd catch error 
    var errors=req.validationErrors();
    if(errors){
        res.status(401).json({
            message:'error getidea /data not valide idea post'
        });
    }
    else{
        const token =req.header('auth_token');
        const id_user = jwt.verify(token,process.env.TOKEN_SECRET)
        let connexion=await oracledb.getConnection(dbconfig);
        //see the outpout of verify 
        // let id_idea=await connexion.execute(
        //     "SELECT id_demande FROM demandes WHERE id_user=?",
        //     [verify]);
        let demandes=await connexion.execute(
            "INSERT INTO demandes (id_demande,name_demande,description,type_idea,state,id_research_team) VALUES (id_demande.nextval,:name_demande,:description,:type_idea,:state,:id_research_team)",
            [   req.body.name_demande ,
                req.body.description ,
                req.body.type_idea , 
                req.body.state,
                id_user
            ]);
    const commit = await connexion.execute('commit');
        
        await connexion.close();
        if(demandes!== undefined){
            return res.json({
                message:'POST idea',
                done:'done succesfully'
            })
        }
    }
};

exports.updatedemande=async(req,res,next)=>{
    const token =req.header('auth_token');
    const id_user = jwt.verify(token,process.env.TOKEN_SECRET);
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "UPDATE demandes set(name_demande=?,description=?,state=0) WHERE id_idea= ? and id_user=?",
    [   req.body.name_demande ,
        req.body.description,
        req.params.id_demande,
        id_user
    ]);
    const commit = await connexion.execute('commit');

    await connection.close();
    return res.json({
        message:'update idea',
        demandes:demandes.rows
        });

};


exports.deletedemande=async(req,res,next)=>{
    //update from db
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "DELETE FROM demandes WHERE id_demandes= ?",
        [req.params.id_demande,
        ]);
        const commit = await connexion.execute('commit');
    
    await connection.close();

    return res.json({
        message:'delete idea', 
    });
};