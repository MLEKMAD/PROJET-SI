const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();


// const authentification= require('./routes/authentification')



app.use("/authentification",(req,res)=>{
    res.send("hello")
});
app.listen(8000, () => {
  console.log('We are live on ' );
});
