const path = require('path') ;
const express = require('express') ;
const router = express.Router() ;

const adminController = require('../controllers/admin') ;

// admin/add-product => GET
router.get('/add-product', adminController.getAddProductsPage); 

router.get('/products', ); 

// admin/add-product => POST
router.post('/add-product', adminController.postAddProductsPage) ;

module.exports = router ;
