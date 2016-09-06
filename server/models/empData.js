var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//emails is object of schema definition

var empData = new Schema({
    wave:String,
    name:String,
    email:String,
    phone:String,
    empcode:String,
    url:String,
    empDep:String,
    empDesig:String,
    skills:String,
    exp:String
});

module.exports = mongoose.model('EmpData',empData);//creating schema Emails is table name
