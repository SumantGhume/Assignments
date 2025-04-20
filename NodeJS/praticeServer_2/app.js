const colors = require('colors')
console.log("Welcome to my server".rainbow.underline)

const express = require('express')

const app = express();

app.use(express.json())

app.get('/api',(req,res)=>{
    res.status(202).send({message:'server running successfully',greet:'Hello User',success:true})
})

app.put('/api/:ID',(req,res)=>{
    console.log(req.params)
    res.status(202).send("This is api for put")
})

app.delete('/api/:ID',(req,res)=>{
    console.log(req.params)
    res.status(200).send(`This is requested ID`)
})

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.status(202).send({message:'server running successfully post',greet:'Hello User post',success:true})
})
app.get('/about',(req,res)=>{
    res.send("THis is About Page")
})
app.get('/contact',(req,res)=>{
    res.send("THis is Contact Page")
})

port = 7000;

const product =[ {id:1,name:"IPhone15",category:"Electronic",price:150000,InStock:true},
    {id:2,name:"IPhone16",category:"Electronic",price:200000,InStock:true}
]

app.get('/AllProduct',(req,res)=>{
    res.send({product:product,message:"successfully Product",success:true})
})

app.get('/Product/:ID',(req,res)=>{
    const ID = req.params.ID;
    const productByID = product.filter(p => p.id == ID)
    res.send({product:productByID,message:"successfully Product",success:true})
})

app.post('/CreateProduct',(req,res)=>{
    const newproduct = {
        id:Date.now(),
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        InStock:true
    }
    product.push(newproduct)
    res.send({message:"successfully Product Created",success:true})
})

app.delete('/deleteProduct/:ID',(req,res)=>{
    const ID = req.params.ID;
    index = product.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"product not found",success:false})
    }
    product.splice(index,1)
    res.status(200).send({message:"Product found",success:true})
})
app.put('/UpdateProduct/:ID',(req,res)=>{
    const ID = req.params.ID;
    index = product.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"product not found",success:false})
    }
    product[index].price = req.body.price
    res.status(200).send({message:"Product Updated",success:true})
})


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`.rainbow)
})

// http://localhost:7000/api