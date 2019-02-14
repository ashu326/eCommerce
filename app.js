const express = require('express') ;
const http = require('http') ;

const app = express() ;
const adminRoutes = require('./routes/admin') ;

app.use(adminRoutes) ;

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1>')
})

const port = process.env.PORT || 3000
app.listen(port, () =>
console.log(`Listening on port....${port}`)
)