exports.getLogin = (req, res) => {
  //const isLoggedIn =req.get('Cookie').split(';')[1].trim().split('=')[1];
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
      path: '/login',
      pageTitle: 'Login',
      isAuthenticated: false
    });
  };

exports.postLogin = (req, res) => {
  //res.setHeader('Set-Cookie', 'loggedIn = true');
  req.session.isLoggedIn = true;
  res.redirect('/');
};

exports.postLogout = (req, res) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
 