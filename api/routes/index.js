var express = require('express');
var router = express.Router();

/*for inserting the value into mongo db we require schema so, we include our
 schema declared file using require method inside the API file.*/
require('../models/batch');
var mongoose = require('mongoose');
var register = mongoose.model('fitfactory');


// /* GET home page. */
// router.get('/', function(req, res, next) {
 
// });
// router.post('/register', function(req, res, next) {
//   res.json({login:true}) //get method can print the result on the browser but post will not hence for 
// });

// /*Register API */
// router.post('/add',function(req,res){
//   new register({fname:req.body.fname,
//     lname:req.body.lname,
//     email:req.body.email,
//     password:req.body.password,
//     cpassword:req.body.cpassword})

//     .save(function(err,register){
//       console.log(err);
//       console.log(register);
//       res.json(register);
//     });
// });


// router.post('/view', function(req, res) {
//   register.find(function(err,batch){
//     console.log(err);
//     console.log(batch);
//     res.json(batch);
//   });
// });



module.exports = router;
