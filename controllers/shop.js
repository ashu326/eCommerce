const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getShopProducts = (req, res) => {
    Product.fetchAll()
        .then(([rows, fieldDtat]) => {
            res.render('shop/product-list', {
                prods: rows, 
                pageTitle: 'Shop',
                path: '/products',
                formsCSS: true,
                productCSS: true,
                acticeAddProduct: true,
            });
        })
        .catch(err => console.log(err));
};

exports.getProductId = (req, res) => {
    const prodId = req.params.productId ;
    Product.findById(prodId)
        .then(([product]) => {
            res.render('shop/product-detail', {
                product: product[0],
                path: '/products',
                pageTitle: product.title
        });
    })
        .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
      Product.fetchAll(products => {
        const cartProducts = [];
        for (product of products) {
          const cartProductData = cart.products.find(
            prod => prod.id === product.id
          );
          if (cartProductData) {
            cartProducts.push({ productData: product, qty: cartProductData.qty });
          }
        }
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: cartProducts
        });
      });
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
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('shop/index', {
                prods: rows, 
                pageTitle: 'Home',
                path: '/',
            });
        })
    .catch(err => console.log(err));
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