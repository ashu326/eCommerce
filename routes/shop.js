const path = require('path') ;

const express = require('express') ;
const router = express.Router() ;

const rootDir = require('../util/path') ;

const adminData = require('./admin') ;

router.get('/', (req, res) => {
    console.log('shopjs', adminData.products) ;
    const products = adminData.products
    res.render('shop', {prods: products, Title: 'Shop'}) ;
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router ;