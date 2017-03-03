// require dependincies
var express = require('express');
var router = express.Router();
var projectController = require('./controllers/projectController');
var StudentController = require('./controllers/StudentController');
var ClientController = require('./controllers/ClientController');

// add routes project
router.get('/portofolio', projectController.getAllProjects);
router.post('/portofolio', projectController.createProject);

// add routes student
router.get('/sRegister', StudentController.addStudent);
router.post('/sRegister', StudentController.addStudent);
router.get('/SLogin', StudentController.logstudent);

//add routes client
router.get('/cRegister', ClientController.addClient);
router.post('/cRegister', ClientController.addClient);
router.get('/cLogin', ClientController.logClient);

//add routes home
router.get('/',projectController.homepage);

module.exports = router;
