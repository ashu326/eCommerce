const Product = require('../models/product') ;

exports.getShopProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Shop',
            path: '/products',
            formsCSS: true,
            productCSS: true,
            acticeAddProduct: true
        }) ;
    });
};

exports.getProductId = (req, res) => {
    const prodId = req.params.productId ;
    Product.findById(prodId, product => {
        console.log('working') ;
        console.log(product) ;
    });
    res.redirect('/') ;
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