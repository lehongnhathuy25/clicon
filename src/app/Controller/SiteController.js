const Course = require("../../model/Course");
const {mutipleMongooseToObject} = require('../../until/mongoose');
class SiteController{
  
    search(req, res){
        res.resnder('search')
    }
    
    index(req, res,next){
        Course.find({})
        .then(courses =>{
            res.render('home',{
                courses: mutipleMongooseToObject(courses)
            })
        })
    }
}
module.exports = new SiteController;