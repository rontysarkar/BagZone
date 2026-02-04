const bcrypt = require('bcrypt');
const userModel = require('../models/user-model');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (user) {
            return res.render('index', { error: "Already have an user, please login" });
        }
        let hash = await bcrypt.hash(password, 10);
        let createdUser = await userModel.create({ fullname, email, password: hash });
        let token = generateToken(createdUser);
        res.cookie("token", token);
        res.redirect('/shop');

    } catch (error) {
        res.send(error.message);
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (!user) return res.render("index", { error: "Email and password is incorrect" })
        let isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.render("index",{error:"Email and password is incorrect"})
        let token = generateToken(user);
        res.cookie('token',token);
        res.redirect('/shop');
    }catch(err){
        res.render('index',{error:err.message})
    }
}

module.exports.logout = async(req,res)=>{
    res.cookie('token',"");
    res.redirect('/');
}