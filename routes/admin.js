const express = require('express') ;
const router = express.Router() ;

router.get('/add-product', (req, res) => {
    res.send('<form action = "/product" method = "POST"><input type = "text><button type = "submit" name = "title">Add Product</button></form>')
})

module.exports = router ;