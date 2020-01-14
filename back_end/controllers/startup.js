const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
// const transport=require('../utils/nodemailer');
const jwt=require('jsonwebtoken');


exports.getstartup=async (req,res,next)=>{//verifie token
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "SELECT id_demande FROM research_team WHERE id_research_team=:id_research_team",
        [req.params.id_research_team]);
    let startups=await connexion.execute(
        "SELECT * FROM startups WHERE id_demande=:id_demande",
        [demandes.rows[0].ID_DEMANDE]);
    await connexion.close();
    return res.json({
        message:'get all idea',
        startups:startups.rows
        });
};

exports.poststartup=async (req,res,next)=>{
    req.check('name_startup','idea name umpty').notEmpty();
    req.check('business_plan','business_plan umpty').isLength({ min: 10 });
    var errors=req.validationErrors();
    if(errors){
        res.status(401).json({
            message:'error getidea /data not valide idea post'
        });
    }
    else{
        let connexion=await oracledb.getConnection(dbconfig);
        let startups=await connexion.execute(
            `INSERT INTO startups
            (id_startup,name_startup,business_plan,id_demande,id_research_team) 
            VALUES (id_startup.nextval,:name_startup,:business_plan,:id_demande,:id_research_team)` ,
            [   req.body.name_startup ,
                req.body.business_plan ,
                req.params.id_demande , 
                req.params.id_research_team
            ]);
        const commit = await connexion.execute('commit');   
        await connexion.close();
        if(startups!== undefined){
            return res.json({
                message:'POST idea',
                done:'done succesfully'
            })
        }
    }
};
