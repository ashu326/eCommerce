const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getShopProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Shop',
            path: '/products',
            formsCSS: true,
            productCSS: true,
            acticeAddProduct: true
        });
    });
};

exports.getProductId = (req, res) => {
    const prodId = req.params.productId ;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product, 
            pageTitle: product.title,
            path: '/products',
    });
    });
};

exports.getCart = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/cart', {
            prods: products, 
            pageTitle: 'Your Cart',
            path: '/cart',
            formsCSS: true,
            productCSS: true,
            acticeAddProduct: true
        }) ;
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
      Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
  };

exports.getIndex = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
        prods: products, 
        pageTitle: 'Home',
        path: '/',
    }) ;
});
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