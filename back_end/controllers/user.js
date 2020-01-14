const bcrypt = require('bcryptjs')
const validatePhoneNumber = require('validate-phone-number-node-js');
const oracledb = require('oracledb'); // not sure
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const dbconfig = require('../utils/oracledb');
const jwt = require('jsonwebtoken');

exports.getuser = async (req, res, next) => {
    console.log("rrrr " , req.body.id_research_team)
    let connexion = await oracledb.getConnection(dbconfig);
    let users = await connexion.execute(   
    `SELECT * FROM research_team JOIN universities 
    ON research_team.id_university=universities.id_university 
    and  research_team.id_research_team = : id_research_team  `  ,
    [req.body.id_research_team]); // verify this
    await connexion.close();
    return res.json({
        message: 'get user',
        users: users.rows
    });
};

exports.getalluser = async (req, res, next) => {
    let connexion = await oracledb.getConnection(dbconfig);
    let users = await connexion.execute("select * from research_team "); // verify this
    await connexion.close();
    return res.json({
        message: 'get user',
        users: users.rows
    });
}


exports.postuser = async (req, res, next) => {

    console.log('checking done');
    // try nd catch error 


    const research_team=req.body.research_team;
    let connexion = await oracledb.getConnection(dbconfig);
    if (research_team == 1) {
        const id_demande=0;
            const {
                nameuniversity,
                name_team,
                full_name_research_team,
                password_hashed_research_team,
                email_research_team,
                phone_number_research_team
            } = req.body;
        var errors = validateresearch(req);
        if (errors) {
            return res.status(400).json({
                message: 'error postuser / data not valide user post'
            });
        }

        const id_university = await getuniversity(nameuniversity);
        if (!id_university) {
            return res.json({
                message: 'error postuser / id uni not valide user post'
    
            })
        }
        let userexiste = await connexion.execute(
            "SELECT email_research_team FROM research_team WHERE (email_research_team=:email_research_team)",
            [email_research_team]);
        console.log(userexiste.rows[0]);
        if (!userexiste.rows) {
            await connexion.close();
            return res.status(400).json({
                message: 'user postuser /email user already existe'
            });
        }
        const lencrypt = await bcrypt.genSalt(10);
        const HashedPassword = await bcrypt.hash(password_hashed_research_team, lencrypt);
        //research_team and agent
        console.log('hashed :', HashedPassword)
        let user = await connexion.execute(
            "INSERT INTO research_team (id_research_team,name_team,full_name_research_team,password_hashed_research_team ,phone_number_research_team,email_research_team,id_university,id_demande) values(id_research_team.nextval,:name_team,:full_name_research_team ,:password_hashed_research_team , :phone_number_research_team , :email_research_team,:id_university,:id_demande)",
            [name_team,
                full_name_research_team,
                HashedPassword,
                phone_number_research_team,
                email_research_team,
                id_university,
                id_demande
            ]);
        const commit = await connexion.execute('commit');


        await connexion.close();
        return res.status(201).json({
            message: 'POST user . user created succesfully ',
            user: user.rows
        });
    } 
    if(research_team == 2) {
        const {
            full_name_agent,
            password_hashed_agent,
            email_agent,
            phone_number_agent
        } = req.body;

        console.log("add CIR"); ///CIR
        const type_agent='CIR';
        var errors = validateCIR(req);
        console.log(errors)
        if (errors) {
            return res.status(400).json({
                message: 'error postagent / data not valide user post'
            });
        }
        const lencrypt = await bcrypt.genSalt(10);
        const HashedPassword = await bcrypt.hash(password_hashed_agent, lencrypt);
        let agent = await connexion.execute(
            "INSERT INTO agent (id_agent,full_name_agent, password_hashed_agent ,email_agent, phone_number_agent,type_agent)  values(id_agent.nextval,:full_name_agent, :password_hashed_agent ,:email_agent, :phone_number_agent,:type_agent)",
            [full_name_agent,
                HashedPassword,
                email_agent,
                phone_number_agent,
                type_agent
            ]);
        const commit = await connexion.execute('commit');


        await connexion.close();
        return res.status(201).json({
            message: 'POST user . CIR created succesfully ',
            agent: agent.rows
        });
    }

    if(research_team == 3) {
        const {
            full_name_agent,
            password_hashed_agent,
            email_agent,
            phone_number_agent
        } = req.body;
        console.log("add GU"); ///GU
        const type_agent='GU';
        var errors = validateCIR(req);
        console.log(errors)
        if (errors) {
            return res.status(400).json({
                message: 'error postagent / data not valide user post'
            });
        }
        const lencrypt = await bcrypt.genSalt(10);
        const HashedPassword = await bcrypt.hash(password_hashed_agent, lencrypt);
        let agent = await connexion.execute(    
        "INSERT INTO agent (id_agent,full_name_agent, password_hashed_agent ,email_agent, phone_number_agent,type_agent)  values(id_agent.nextval,:full_name_agent, :password_hashed_agent ,:email_agent, :phone_number_agent,:type_agent)",
            [full_name_agent,
                HashedPassword,
                email_agent,
                phone_number_agent,
                type_agent
            ]);
        const commit = await connexion.execute('commit');
        await connexion.close();
        return res.status(201).json({
            message: 'POST user . GU created succesfully ',
            agent: agent.rows
        });
    }

};

// update data user when user logged in 
exports.updateuser = async (req, res, next) => {
    console.log("password_hashed_research_team : ", req.body.password_hashed_research_team, "\n id_research_team : ", req.params.id_research_team)
    let connexion = await oracledb.getConnection(dbconfig);
    const lencrypt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password_hashed_research_team, lencrypt);
    console.log(hashedPassword)
    let users = await connexion.execute(
        "UPDATE research_team set  password_hashed_research_team =: password_hashed_research_team    WHERE  id_research_team =: id_research_team",
        [   hashedPassword,
            req.params.id_research_team
        ]);     
    const commit = await connexion.execute('commit');
    await connexion.close();
    return res.status(201).json({
        message: 'update user successfully'
    })

    //******************* */
};


const getuniversity = async (nameuniversity) => {
    let connexion = await oracledb.getConnection(dbconfig);
    let university = await connexion.execute(
        "SELECT id_university FROM universities WHERE name_university=:nameuniversity",
        [nameuniversity]);

    return university.rows[0].ID_UNIVERSITY;
}

const validateresearch = (req) => {
    req.check('nameuniversity', 'name unpty ').notEmpty();
    req.check('name_team', ' name umpty').notEmpty();
    req.check('full_name_research_team', 'full name umpty').notEmpty();
    req.check('password_hashed_research_team', 'password umpty').notEmpty();
    req.check('email_research_team', 'email not valid').isEmail();
    req.check('phone_number_research_team', 'number not valide').isLength({
        min: 5
    })
    return req.validationErrors();
}

const validateCIR = (req) => {
    req.check('full_name_agent', 'full name umpty').notEmpty();
    req.check('password_hashed_agent', 'password umpty').notEmpty();
    req.check('email_agent', 'email not valid').isEmail();
    req.check('phone_number_agent', 'number not valide').isLength({
        min: 5
    })
    return req.validationErrors();
}