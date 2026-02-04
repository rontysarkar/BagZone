const express = require('express');
const router = express.Router();

const upload = require('../config/multer-cofig');
const productModel = require('../models/product-model');

router.post('/create', upload.single('image'), async (req, res) => {
    try {
        let { name, price, discount, panelColor, bgcolor, textcolor } = req.body;
        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            panelColor,
            bgcolor,
            textcolor
        })
        res.render('createproducts',{success:'product created successfully'});
    } catch (err) {
        res.send(err.message);
    }
})

module.exports = router;