const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/mongodb-connection');

const ownerRouter = require('./routes/ownerRoute');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');


app.set("view engine","ejs");
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/owners',ownerRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(3000);