const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const oracledb = require('oracledb'); // not sure
const dbconfig = require('../utils/oracledb');
const RESEARCH_TEAM = 1;

exports.login = async (req, res, next) => {
    let connexion = await oracledb.getConnection(dbconfig);
    req.check('type', ' is not selected');
    req.check('password_hashed', 'password not valid').notEmpty();
    req.check('email_user', 'email not valid').isEmail();
    if (req.validationErrors()) {
        await connexion.close();
        return res.status(400).json({
            message: 'error login / from validator error'
        })
    }
    if (req.body.type == RESEARCH_TEAM) //research team
    {
        let userexiste = await connexion.execute(
            "SELECT id_research_team,password_hashed_research_team , email_research_team FROM research_team WHERE email_research_team=:email_research_team",
            [req.body.email_user]);
        // console.log('user existe in auth.js value of promise research team userexist \n ', userexiste);
        await connexion.close();
        if (!userexiste.rows[0]) {
            return res.status(400).json({
                message: "error login / from user don't existe",
                user: 'None'
            })
        }

        console.log('body password : ',req.body.password_hashed , '\n hashed from db :',userexiste.rows[0].PASSWORD_HASHED_RESEARCH_TEAM)
        const ValidPassword = await bcrypt.compare(req.body.password_hashed, userexiste.rows[0].PASSWORD_HASHED_RESEARCH_TEAM);
        console.log(ValidPassword);
        if (!ValidPassword) {
            return res.status(400).json({
                message: 'password not valid form login',
                user: 'None'
            });
        }
        //i have to console log the user to see the composante of it
        const token = jwt.sign({id_research_team: userexiste.rows[0].ID_RESEARCH_TEAM
        }, process.env.TOKEN_SECRET,{
            expiresIn: '1h'
        });
        console.log(token);
        return res.header('auth_token',token).json({
            message: 'logged succesfully ',
            users:userexiste.rows[0].ID_RESEARCH_TEAM
        });


    } else {


        let userexiste = await connexion.execute(
            "SELECT password_hashed_agent,email_Agent FROM agent WHERE email_agent=:email_agent",
            [req.body.email_user]);
        console.log('user existe in auth.js value of promise Agent userexist \n ', userexiste);
        if (!userexiste.rows[0]) {
            await connexion.close();
            return res.status(400).json({
                message: "error login / from user don't existe",
                user: 'None'
            })
        }
        await connexion.close();
        const ValidPassword = await bcrypt.compare(req.body.password_hashed_agent , userexiste.rows[0].PASSWORD_HASHED_AGENT);
        if (!ValidPassword) {
            return res.status(400).json({
                message: 'password not valid form login',
                user: 'None'
            });
        }
        //i have to console log the user to see the composante of it
        const token = jwt.sign({
            id_user: userexiste.rows['id_agent']
        }, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        });
        return res.header('auth_token', token).json({
            message: 'logged succesfully',
            users:userexiste.rows[0]
        })
    }
}

