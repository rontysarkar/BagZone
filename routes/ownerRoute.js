const express = require('express');
const router = express.Router();

const ownerModel = require('../models/owner-model');

if (process.env.NODE_ENV == "development") {
    router.post('/create',async (req, res) => {
        const owners =await ownerModel.find();
        if(owners.length > 0){
            res.status(500).send("You Don't create a owner");
        }

        let {fullname,email,password} =req.body;
        const createOwner =await ownerModel.create({
            fullname,email,password
        }) 
        res.send(createOwner);
    })
}

router.get('/', (req, res) => {
    res.send('owner route done');
})

module.exports = router;