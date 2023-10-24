const siteRouter = require('./site.js')

function router(app){
    app.get('/admin',siteRouter)
    app.get('/',siteRouter)
}
module.exports = router;
