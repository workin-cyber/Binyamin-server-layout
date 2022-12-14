const express = require('express'),
router = express.Router()

const productService= require('../BL/product.service')
router.post('/product',async (req,res)=>{
    let p = await productService.createNewProduct(req.body)
    res.send(p)
})

module.exports = router