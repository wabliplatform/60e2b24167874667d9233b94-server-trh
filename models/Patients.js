
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientsSchema = new Schema({
Underscoreid:String , 


pname:String , 


page:String 



})

module.exports = {
  Patients : mongoose.model('patients', patientsSchema),
}

