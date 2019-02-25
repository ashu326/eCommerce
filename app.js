const path = require('path') ;
const http = require('http') ;

const express = require('express') ;
const bodyParser = require('body-parser');

const app = express() ;

app.set('view engine', 'ejs') ;
app.set('views', 'views') ;

const errorControllers = require('./controllers/error') ;
const mongoConnect = require('./util/database').mongoConnect;

app.use(bodyParser.urlencoded({extended: false})) ;
app.use(express.static(path.join(__dirname, 'public'))) ;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404Page); 

mongoConnect(client => {
    const port = process.env.PORT || 3000
    app.listen(port, () => console.log(client));
    console.log(`Listening on port....${port}`)
});