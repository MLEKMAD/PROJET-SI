const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();


const authentification= require('./routes/users/authentification');

app.use(bodyParser.json());
// app.use((req,res,next)=>{
  // res.setHeader('Access-Control-Allow-Origin','*');
  // res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET,POST,PUT,PATCH,DELETE');
  // res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');

// });

app.use(authentification);

app.listen(8060);
