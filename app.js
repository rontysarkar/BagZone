const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/mongodb-connection');
require('dotenv').config({quiet:true});
const flash = require('connect-flash');
const expressSession = require('express-session')

const ownerRouter = require('./routes/ownerRoute');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const indexRouter = require('./routes/index');


app.set("view engine","ejs");
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash());
app.use('/',indexRouter);
app.use('/owners',ownerRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(3000);