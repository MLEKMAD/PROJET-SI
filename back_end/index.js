const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();


const user= require('./routes/users/user');
const idea= require('./routes/ideas/idea');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended:true
  })
);
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET,POST,PUT,PATCH,DELETE');
  // res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
  next();

});

app.use(user);
app.use(idea);


app.listen(8060);
