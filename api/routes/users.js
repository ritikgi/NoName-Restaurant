var express = require('express');
var router = express.Router();
var app = express();
const UserRegister = require('../models/userModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
});
router.post('/addRegister',function(req,res){
  const firstName=req.body.firstName
  const lastName=req.body.lastName
  const email=req.body.email
  const password=req.body.password
  
  new UserRegister({
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
  }).save(function(err,data){
      if(err){
          console.log(err)
      }
      else{
          console.log(data)
          res.json(data)
      }
  })
})


router.post('/signin',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  console.log(email)
  UserRegister.findOne({
      email:email
  },(err,user)=>{
      if(err){
          res.json(err);
      }
      else{
          console.log(user);
          if(user == null ){
            res.json({message:"Check your Credentials"});
           
          }
          else if (user.password != password){
              res.json({message:"Check your password"});
          }
          else{
              res.json(user);
              
          }
      }
  })
})

module.exports = router;
