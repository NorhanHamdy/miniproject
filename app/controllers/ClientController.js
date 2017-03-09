let client = require('../models/ClientModel');

let ClientController = {
  addClient: function(req, res){
    let Client = new client(req.body);
    Client.save(function(err, user){
      if(err){
        res.send(err.message)
        console.log(err);
      }
      else{
        console.log(Client);
        res.redirect('cLogin');
      }
    })
  },
  logClient: function(req, res){
    client.find({username: req.body.username,
      password: req.body.password}, function(err, user){
      if (err){
        res.send(err.message)
        console.log(err);
      }
      if(user){
        console.log(user);
        return res.render('home');
          res.send("You are logged in :)");
      }
      else{
        res.send("Login Failed!");
      }
    })
  }
}
module.exports = ClientController;
