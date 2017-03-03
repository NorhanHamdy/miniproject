let student = require('../models/StudentModel');

let StudentController = {
  addStudent: function(req, res){
    let Student = new student(req.body);
    Student.save(function(err, student){
      if(err){
        res.send(err.message)
        console.log(err);
      }
      else{
        console.log(Student);
        res.render('sRegister');
      }
    })
  },
  logstudent: function(req, res){
    student.find({username: req.body.username,
      password: req.body.password}, function(err, student){
      if (err){
        res.send("Login Failed!");
        res.send(err.message)
        console.log(err);
      }
      else{
        console.log(student);
        res.render('SLogin');
      }

    })
  }
}
module.exports = StudentController;
