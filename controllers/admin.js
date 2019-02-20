const Product = require('../models/product') ;

exports.getAddProductsPage = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: "Add Product", 
        path: "/add-product",
    })
}; 

exports.postAddProductsPage = (req, res) => {
    const title = req.body.title ;
    const imageUrl = req.body.imageUrl ;  
    const price = req.body.price ;
    const description = req.body.description ;
    const product = new Product(title, imageUrl, price, description) ;
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
    res.render('admin/edit-product', {
        pageTitle: "Add Product", 
        path: "/edit-product",
        editing: editMode,
    })
};