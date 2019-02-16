const products = []

exports.getAddProductsPage = (req, res) => {
    res.render('product', {
        pageTitle: "Add Product", 
        path: "/add-product",
        formsCSS: true,
        productCSS: true,
        acticeAddProduct: true
    })
}; 

exports.postAddProductsPage = (req, res) => {
    products.push({title: req.body.title}) ;
    res.redirect('/') ;
}

exports.getShopProducts = (req, res) => {
    res.render('shop', {
        prods: products, 
        Title: 'Shop',
        path: '/',
        formsCSS: true,
        productCSS: true,
        acticeAddProduct: true
    }) ;
}