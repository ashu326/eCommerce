const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const MongoDB_Url = 'mongodb://localhost:27017/shop';

const app = express();

const store = new MongoDBStore({
  uri: MongoDB_Url,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session ({
  secret: 'my secret', 
  resave: false, 
  saveUninitialized: false,
  store: store
  })
);

app.use((req, res, next) => {
  User.findById('5d04d5fa1ae4af0cca3125f8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);


mongoose.connect(MongoDB_Url).then(result => {
  if( User.findOne().then(user => {
    if(!user) {
      const user = new User({
        name: 'Ashu',
        email: 'ashu@gmail.com',
        cart:{
          items: []
        }
      });
      user.save();
    }
  }))
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});

// mongoConnect(() => {
//   app.listen(3000);
// });
