const Products = require('../models/product') ;

exports.getShopProducts = (req, res) => {
    Products.fetchAll() ;
    res.render('shop/product-list', {
        prods: products, 
        pageTitle: 'Shop',
        path: '/products',
        formsCSS: true,
        productCSS: true,
        acticeAddProduct: true
    }) ;
} ;

exports.getProductId = (req, res) => {
    const prodId = req.params.productId ;
    Products.findById(prodId, product => {
        console.log(product) ;
    }) ;
    res.redirect('/') ;
} ;
exports.getCart = (req, res) => {
    Products.fetchAll() ;
    res.render('shop/cart', {
        prods: products, 
        pageTitle: 'Your Cart',
        path: '/cart',
        formsCSS: true,
        productCSS: true,
        acticeAddProduct: true
    }) ;
};

exports.getIndex = (req, res) => {
    res.render('shop/index', {
        prods: products, 
        pageTitle: 'Home',
        path: '/',
    }) ;
};

exports.getCheckout = (req, res) => {
    Products.fetchAll() ;
    res.render('shop/checkout', {
        prods: products, 
        pageTitle: 'Checkout',
        path: '/checkout',
    }) ;
};

exports.getOrders = (req, res) => {
    Products.fetchAll() ;
    res.render('shop/orders', {
        prods: products, 
        pageTitle: 'My Orders',
        path: '/orders',
    }) ;
};