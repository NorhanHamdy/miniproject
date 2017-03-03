let Project = require('../models/Project');

let projectController = {

    getAllProjects:function(req, res){

        Project.find(function(err, projects){

            if(err)
                res.send(err.message);
            else
                res.render('portofolio', {Project});
        })
    },
    homepage:function(req,res){
      res.render('home');
    },

    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.render('portofolio');
            }
        })
    }
}

module.exports = projectController;
