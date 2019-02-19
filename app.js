const path = require('path') ;
const express = require('express') ;
const http = require('http') ;

const app = express() ;

app.set('view engine', 'ejs') ;
app.set('views', 'views') ;

const bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({extended: false})) ;

const adminRoutes = require('./routes/admin') ;
const homeRoutes = require('./routes/shop') ;
const errorControllers = require('./controllers/error') ;

app.use(express.static(path.join(__dirname, 'public'))) ;

app.use(adminRoutes) ;
app.use(homeRoutes) ;
//app.use(cartController.getCart);

app.use(errorControllers.get404Page) ; 

const port = process.env.PORT || 3000
app.listen(port, () =>
console.log(`Listening on port....${port}`)
)