const Product = require('../models/product');
const Cart = require('../models/cart');

//const ObjectID = mongodb.ObjectID;

exports.getAddProductsPage = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: "Add Product", 
        path: "/add-product",
        editing: false,
        isAuthenticated: req.isLoggedIn
    })
}; 

exports.postAddProductsPage = (req, res) => {
    const title = req.body.title ;
    const imageUrl = req.body.imageUrl ;  
    const price = req.body.price ;
    const description = req.body.description ;
    const product = new Product(
        title, 
        price, 
        imageUrl, 
        description, 
        null, 
        req.user._id
    );
    product.save()
    .then(result => {
        console.log(result);
        res.redirect('/products');
    }).
    catch(err => console.log(err));
};

exports.getProducts = (req, res) => {
    Product.fetchAll()
        .then(products => {
            res.render('admin/products', {
                prods: products, 
                pageTitle: 'Products',
                path: '/admin-products',
                isAuthenticated: req.isLoggedIn
            })
        }).catch(err => console.log(err));
};

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/');
    }
    const prodId = req.params.productId ;
    Product.findById(prodId)
        .then(product => {
            if(!product){
                res.redirect('/');
            }
            res.render('admin/edit-product',{
                pageTitle: 'Edit Page',
                path: '/edit-product',
                editing: 'editMode',
                product: product,
                isAuthenticated: req.isLoggedIn
            })
        }).catch(err => console.log(err));
}; 

exports.postEditProduct = (req, res) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price;

    const product = new Product(updatedTitle, 
        updatedPrice,
        updatedImageUrl, 
        updatedDescription, 
        prodId
    );
    return product.save()
        .then(result => {
            console.log('Updated product...');
            res.redirect('/products');
        })
        .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId)
        .then(result => {
            console.log('Destroyed Product');
            res.redirect('/products');
        }).catch(err => console.log(err));
  };

//   exports.postDeleteCartProduct = (req, res) => {
//       const prodId = req.body.productId ;
//       Product.findById(prodId, product => {
//           Cart.deleteProduct(prodId, product.price);
//           res.redirect('/cart') ;
//       });
//   };