const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getShopProducts = (req, res) => {
  Product.fetchAll()
      .then(products => {
        res.render('shop/product-list', {
          prods: products, 
          pageTitle: 'Home',
          path: '/products',
      }); 
      }).catch(err => console.log(err));
};

exports.getProductId = (req, res) => {
    const prodId = req.params.productId ;
    Product.findById(prodId)
        .then(product => {
            res.render('shop/product-detail', {
                product: product,
                path: '/products',
                pageTitle: product.title
        });
    }).catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
    req.user.getCart().then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    }).catch(err => console.log(err));
  };

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId).then(product =>{
      return req.user.addToCart(product);
    }).then(result => {
      console.log(result);
    })
    res.redirect('/cart');
  };

  exports.postCartDeleteProduct = (req, res) => {
    const prodId = req.body.productId;
    req.user.deleteItemFromCart(prodId)
      .then(result => {
        res.redirect('/cart');
      })
      .catch(err => console.log(err));
  };
  
  exports.getIndex = (req, res) => {
    Product.fetchAll()
      .then(products => {
        res.render('shop/index', {
          prods: products, 
          pageTitle: 'Home',
          path: '/',
      }); 
      }).catch(err => console.log(err));
};

exports.getCheckout = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/checkout', {
            prods: products,  
            pageTitle: 'Checkout',
            path: '/checkout',
        });
    });
};

exports.getOrders = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/orders', {
            prods: products, 
            pageTitle: 'My Orders',
            path: '/orders',
        });
    });
};