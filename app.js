const path = require('path') ;
const express = require('express') ;
const http = require('http') ;

const app = express() ;
const adminRoutes = require('./routes/admin') ;
const homeRoutes = require('./routes/shop') ;

app.use(adminRoutes) ;
app.use(homeRoutes) ;

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views', '404.html')) ;
})

const port = process.env.PORT || 3000
app.listen(port, () =>
console.log(`Listening on port....${port}`)
)