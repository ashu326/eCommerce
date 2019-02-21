const path = require('path') ;
const express = require('express') ;
const router = express.Router() ;

const adminController = require('../controllers/admin') ;

// admin/add-product => GET
router.get('/add-product', adminController.getAddProductsPage); 

router.get('/admin-products', adminController.getProducts); 

// admin/add-product => POST
router.post('/add-product', adminController.postAddProductsPage);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

module.exports = router ;
