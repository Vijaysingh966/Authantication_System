// for data base connection!

const mongoose = require('mongoose');
const { type } = require('os');
require("dotenv").config()
// only for admin
// here we set our user schema like user role, name, password

const userschema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type :String,
        required:true

    },

    role:{
        type:String,
        enum:["admin"]
    },
});

module.exports = mongoose.model('user',userschema)


