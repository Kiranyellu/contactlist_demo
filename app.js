// importing modules 
 var express = require("express");         // need to install 
 var mongoose = require("mongoose");             //  need to install 
 var bodyparser =require('body-parser');     // need to install 
 var cors = require('cors');                    // need to install 
 var path = require('path');       // no need to install serpartly 

 var app = express();

 const route = require('./routes/route');

  //contact to mongodb
  mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
  console.log('Connected to mongodb @ 2017');
});

mongoose.connection.on('error',(err)=>{

    if(err){
        console.log('error in database connection'+ err);
    }
  });

 // port no
 const port = 3000;

 //adding middleware --cors
app.use(cors());

//body-parser
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));

//static  files
app.use(express.static(path.join(__dirname,'public')));

//add routes
 app.use('/api',route);
 

 // testing server
 app.get('/',(req,res)=>{
     res.send("footbar");
 })

 app.listen(port,()=>{
     console.log("server connected at port:"+ port);
 });