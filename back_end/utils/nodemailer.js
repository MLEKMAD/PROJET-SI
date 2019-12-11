const nodemailer=require('nodemailer')

const transport = nodemailer.createTransport({
    service :'outlook',
    auth:{
        user :process.env.user_email,
        pass :process.env.user_email_password
    }
});

module.exports=transport;