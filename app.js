const path = require('path') ;
const http = require('http') ;

const express = require('express') ;
const bodyParser = require('body-parser');

const app = express() ;

app.set('view engine', 'ejs') ;
app.set('views', 'views') ;

const errorControllers = require('./controllers/error') ;
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

app.use(bodyParser.urlencoded({extended: false})) ;
app.use(express.static(path.join(__dirname, 'public'))) ;

app.use((req, res, next) => {
    User.findById('5c744abb5dd33604e6e710b5')
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            next();
        })
        .catch(err => console.log(err));
});

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorControllers.get404Page); 

mongoConnect(client => {
    const port = process.env.PORT || 3000
    app.listen(port, () => console.log(client));
    console.log(`Listening on port....${port}`)
});