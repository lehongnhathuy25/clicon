const express = require('express') ;
const { engine } = require ('express-handlebars') ;
const path = require('path');
const app = express();

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);
