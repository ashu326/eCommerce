const path = require('path') ;
const express = require('express') ;
const http = require('http') ;

const app = express() ;

app.set('view engine', 'ejs') ;
app.set('views', 'views') ;

const bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({extended: false})) ;

const adminData = require('./routes/admin') ;
const homeRoutes = require('./routes/shop') ;

app.use(express.static(path.join(__dirname, 'public'))) ;

app.use(adminData.routes) ;
app.use(homeRoutes) ;

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname,'views', '404.html'))
    res.status(400).render('404',{pageTitle: "404 error"}) ;
})

const port = process.env.PORT || 3000
app.listen(port, () =>
console.log(`Listening on port....${port}`)
)