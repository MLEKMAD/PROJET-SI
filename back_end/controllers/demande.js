const oracledb=  require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
// const transport=require('../utils/nodemailer');
const jwt=require('jsonwebtoken');


exports.alldemande=async (req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute("SELECT * FROM demandes");
    await connexion.close();
    return res.json({
        message:'get all idea',
        demandes:demandes.rows
        });
};

exports.getdemande=async (req,res,next)=>{//verifie token
    const token =req.header('auth_token');
    const id_user = jwt.verify(token,process.env.TOKEN_SECRET);
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "SELECT (name_demande,description,type_idea,state) FROM demandes WHERE id_research_team=:id_research_team",
        [id_user]);
    await connexion.close();
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
        const type_idea='init';
        const state=0;
        const id_competence_pool=0;

        const token =req.header('auth_token');
        const id_user = jwt.verify(token,process.env.TOKEN_SECRET)
        let connexion=await oracledb.getConnection(dbconfig);
        //see the outpout of verify 
        let id_idea=await connexion.execute(
            "SELECT id_demande FROM demandes WHERE id_user=:id_user",
            [id_user]);
        let demandes=await connexion.execute(
            "INSERT INTO demandes (id_demande,name_demande,description,type_idea,state,id_competence_pool) VALUES (id_demande.nextval,:name_demande,:description,:type_idea,:state,:id_competences_pool)",
            [   req.body.name_demande ,
                req.body.description ,
                type_idea , 
                state,
                id_competence_pool
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
    let id_competence_pool= await getpool(req.body.name_competence_pool);
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        `UPDATE demandes set 
        type_idea =:type_idea,state=:state,id_competence_pool=:id_competence_pool
        WHERE id_demande=:id_demande`  ,
    [   req.body.type_idea ,
        req.body.state,
        id_competence_pool.ID_COMPETENCES_POOL,
        req.params.id_demande
    ]);
    const commit = await connexion.execute('commit');
    await connexion.close();
    return res.json({
        message:'updatesd idea',
        });

};


exports.deletedemande=async(req,res,next)=>{
    //update from db
    console.log(req.params.id_demande)
    let connexion=await oracledb.getConnection(dbconfig);
    let demandes=await connexion.execute(
        "DELETE FROM demandes WHERE id_demande=:id_demande",
        [req.params.id_demande]);
        const commit = await connexion.execute('commit');
    await connexion.close();

    return res.json({
        message:'delete idea', 
    });
};


const getpool = async (name_competence_pool) => {
    let connexion = await oracledb.getConnection(dbconfig);
    console.log('i am here', name_competence_pool)
    let pool = await connexion.execute(
        "SELECT id_competences_pool FROM competences_pool WHERE name_competences_pool=:name_competences_pool",
        [name_competence_pool]);
        console.log('kaejffaef :',pool.rows)
    return pool.rows[0];
}