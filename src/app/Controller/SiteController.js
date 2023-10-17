class SiteController{
    index(req, res){
        res.render('home')
    }

    search(req, res){
        res.resnder('search')
    }
}
module.exports = new SiteController;