const express = require('express') ;
const { engine } = require ('express-handlebars') ;
const path = require('path');
const app = express();

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    res.render('search')
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.post('/search', (req, res) => {
    console.log(req.body.q)
    res.send('');
});

app.use(express.urlencoded ({
    extended:true
}))

app.listen(3000);
