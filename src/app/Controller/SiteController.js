const Categories = require("../../models/categories");
const {mutipleMongooseToObject} = require('../../until/mongoose');
class SiteController{
    index(req,res){
        res.render('home')
    }
    admin(req, res,next){
        Categories.find({})
        .then(categories =>{
            res.render('admin',{
                categories: mutipleMongooseToObject(categories)
            })
        })
    }
    
}
module.exports = new SiteController;
