const newsRouter = require('./news')
const siteRouter = require('./site')
const route = require('./routes')
function router(app){
    app.use ('/news', newsRouter)
    app.use('/news', newsRouter)
    app.get('/search', (req, res) => {
        console.log(req.query)
        res.render('search');
    });
}
router (app)
module.exports = router;