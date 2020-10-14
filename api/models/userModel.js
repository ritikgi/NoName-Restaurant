//first of all we make a connection for nodejs or mongodb 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let userRegister = new Schema({
    firstName:{
        type:String,
        required:'this feild is required'
    },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        
},
);
module.exports = mongoose.model('UserRegister', userRegister);