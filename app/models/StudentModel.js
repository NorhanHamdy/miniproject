var mongoose = require('mongoose');

var RegisterSchema = mongoose.Schema({
  username:{type: String, required: true, unique: true},
  password:{type: String, required: true},
})
var student = mongoose.model("addStudent", RegisterSchema);


module.exports = student;
