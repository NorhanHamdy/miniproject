var mongoose = require('mongoose');

var ClientSchema = mongoose.Schema({
  username:{type: String, required: true, unique: true},
  password:{type: String, required: true},
})
var client = mongoose.model("addClient", ClientSchema);

module.exports = client;
