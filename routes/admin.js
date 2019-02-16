const path = require('path') ;
const express = require('express') ;
const router = express.Router() ;

const rootDir = require('../util/path') ;

const products = []

// admin/add-product => GET
router.get('/add-product', (req, res) => {
    res.render('product', {pageTitle: "Add Product"})
    //res.sendFile(path.join(rootDir, 'views', 'product.html')) ;
});

// admin/add-product => POST
router.post('/add-product', (req, res) => {
    products.push({title: req.body.title}) ;
    res.redirect('/') ;
})

exports.routes = router ;
exports.products = products ;
