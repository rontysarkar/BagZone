const jwt = require('jsonwebtoken');

const isLoggedin = (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) return res.redirect('/');
        let payload = jwt.verify(token,process.env.JWT_KEY);
        req.user = payload;
        next();
    }catch(err){
        res.redirect('/');
    }
}

module.exports = isLoggedin;