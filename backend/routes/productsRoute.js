const express = require('express');
const Products = require('../models/productDetails');
const requireAuth = require('../middleware/authMiddleware');
const router = express.Router();


//GET ROUTE FOR ALL PRODUCTS
router.get('/products',async(req,res)=>{
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.log('error in get products all ',error);
    }
})

// GET ROUTE FOR SINGLE PRODUCT
router.get('/product/:id',async(req,res)=>{
    try {
        console.log(req.params.id);
        const product = await Products.findById(req.params.id);
        if(product){
            res.json(product);
            // console.log('product from single produc route ',product);
        }
        else{
            res.status(404).json({error:"product not found"});
        }
    } catch (error) {
        console.log("error in single product route ",error);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = router;