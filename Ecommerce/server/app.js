import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import "./config/db.js"
import brandRoutes from './Routes/brandRoutes.js'
import categoryRoutes from './Routes/categoryRoutes.js'
import productRoutes from './Routes/productRoutes.js'
import userRoutes from './Routes/userRoutes.js'


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//? http://localhost:7000/api/product/create

app.use('/api/brand/',brandRoutes)
app.use('/api/category/',categoryRoutes)
app.use('/api/product/',productRoutes) 
app.use('/api/user/',userRoutes) 

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})
