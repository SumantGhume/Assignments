const express  = require('express')
const app = express()
require('dotenv').config();
const productcontroller = require('./Routes/productRouter')
const categoryController = require('./Routes/categoryRouter')

const port = process.env.PORT

app.use(express.json());

app.use("/api/product/",productcontroller);
app.use("/api/category/",categoryController);

app.listen(port,()=> console.log(`Example app listening Port ${port}`));