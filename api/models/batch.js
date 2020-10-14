//first of all we make a connection for nodejs or mongodb 
var mongoose =require('mongoose');
var Schema= mongoose.Schema;

var register = new Schema({firstName:String,lastName:String ,email:String , password:String});

mongoose.model('fitfactory',register);