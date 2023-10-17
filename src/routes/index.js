const newsRouter = require('./news')
const siteRouter = require('./site')

function router(app){
    app.use ('/', siteRouter)
    app.use('/news', newsRouter)
    app.get('/search', (req, res) => {
        console.log(req.query)
        res.render('search');
    });
}
module.exports = router;