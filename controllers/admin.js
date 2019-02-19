const Product = require('../models/product') ;

exports.getAddProductsPage = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: "Add Product", 
        path: "/add-product",
        formsCSS: true,
        productCSS: true,
        acticeAddProduct: true
    })
}; 

exports.postAddProductsPage = (req, res) => {
    const title = req.body.title ;
    const imageUrl = req.body.imageUrl ;  
    const price = req.body.title ;
    const description = req.body.description ;
    const product = new Product(title, imageUrl, price, description) ;
    product.save() ;
    res.redirect('/') ;
} 

exports.getProducts = (req, res) => {
    Product.fetchAll() ;
    res.render('admin/products', {
        prods: products, 
        pageTitle: 'Products',
        path: '/admin-products',
    }) ;
} 