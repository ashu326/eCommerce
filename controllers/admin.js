const Product = require('../models/product') ;

exports.getAddProductsPage = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: "Add Product", 
        path: "/add-product",
        editing: false,
    })
}; 

exports.postAddProductsPage = (req, res) => {
    const title = req.body.title ;
    const imageUrl = req.body.imageUrl ;  
    const price = req.body.price ;
    const description = req.body.description ;
    const product = new Product(null, title, imageUrl, description, price) ;
    product.save() ;
    res.redirect('/') ;
} 

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Products',
            path: '/admin-products',
        }) ;
    }) ;
};

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/');
    }
    const prodId = req.params.productId ;
    Product.findById(prodId, product => {
        if(!product){
            res.render('/');
        }
        res.render('admin/edit-product', {
            pageTitle: "Add Product", 
            path: "/edit-product",
            editing: editMode,
            product: product,
        });
    });
};

exports.postEditProduct = (req, res) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price;

    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice);
    updatedProduct.save();

    res.redirect('/products');
};