const express = require('express');
const router = express.Router();

const isLoggedin = require('../middleware/isLoggedin');
const productModel = require('../models/product-model');

router.get('/',(req,res)=>{
    res.render('index',{error :""});
})

router.get('/shop',isLoggedin,async(req,res)=>{
    const products = await productModel.find();
    res.render('shop',{products});
})



module.exports = router;