const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const validator =require('express-validator');
const dotenv = require('dotenv');


const user= require('./routes/users/user');
const auth= require('./routes/users/auth');
const competence_pool=require('./routes/competence_pool');
const demande= require('./routes/demande/demande');
const startup=require('./routes/startup');




require('events').EventEmitter.defaultMaxListeners = 20;

dotenv.config();


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended:true
  })
);

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
  next();
});

app.use(validator());




app.use(user);
app.use(auth);
app.use(demande);
app.use(competence_pool);
app.use(startup);



app.listen(8060,()=>{console.log("serveur is listning")});
