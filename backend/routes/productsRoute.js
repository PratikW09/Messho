const express = require('express');
const Product = require('../models/productDetails');
const router = express.Router();

router.get('/products',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log('error in get products all ',error);
    }
})

module.exports = router;