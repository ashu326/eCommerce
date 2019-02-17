const products = []

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
    products.push({title: req.body.title}) ;
    res.redirect('/') ;
}

exports.getShopProducts = (req, res) => {
    res.render('shop/product-list', {
        prods: products, 
        pageTitle: 'Shop',
        path: '/',
        formsCSS: true,
        productCSS: true,
        acticeAddProduct: true
    }) ;
}

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        prods: products, 
        pageTitle: 'Cart',
        path: '/cart',
        formsCSS: true,
        productCSS: true,
        acticeAddProduct: true
    }) ;
}