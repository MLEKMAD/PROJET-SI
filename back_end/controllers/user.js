
const validatePhoneNumber = require('validate-phone-number-node-js');


exports.getuser=async(req,res,next)=>{
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute("SELECT * FROM users WHERE id_user= ?",[req.params.user_id]);
    res.json({
        message:'get user',
        users,
        done:'true' 
                });
    await connection.close();
};

exports.postuser=async(req,res,next)=>{

    req.check('full_name','full name umpty').notEmpty();
    req.check('password_hashed','password umpty').isLength({ min: 6 });
    req.check('email_user','email not valid').isEmail();
    req.check('phone_number_user','number not valide').isLength({min:10})
    const phone_number_valide = validatePhoneNumber.validate(req.body.phone_number_user);
    if(!phone_number_valide){
        res.status(401).json({
            message:'phone number not valide'
        });
    }
    // try nd catch error 
    var errors=req.validationErrors();
    if(errors){
        res.status(401).json({
            message:'data not valide user post'
        });
    }
    else{
        let users={
            id_user,
            full_name=req.body.full_name,
            password_hashed=req.body.password_hashed,
            email_user=req.body.email_user,
            phone_number_user=req.body.phone_number_user
        }
        let connexion=await oracledb.getConnection(dbconfig);
        let userexiste =await connexion.execute("SELECT email_user FROM user WHERE email_user=?",[req.body.email_user]);
        if(userexiste == undefined){
            let user=await connexion.execute("INSERT INTO users",[ users.full_name , users.password_hashed , users.email_user , users.phone_number_user ]);
            users.id_user=user.id_user;
            res.status(201).json({
                message:'POST user . user created succesfully ',
                users,
            })
        }
    }
    await connection.close();
};


exports.updateuser=async(req,res,next)=>{
    const email_user=req.body.email_user;
    let connexion=await oracledb.getConnection(dbconfig);
    let users=await connexion.execute("UPDATE FROM user WHERE id_idea= ?",[req.params.id_idea]);
//compare with oracle bdd
    console.log(req.body);
    res.status(201).json({
        message:'update user',
        users,
        done:'done succesfully'
    })
    await connection.close();

//******************* */
};