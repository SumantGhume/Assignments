const product =[ {id:1,name:"IPhone15",category:"Electronic",price:150000,InStock:true},
    {id:2,name:"IPhone16",category:"Electronic",price:200000,InStock:true}
]


AllProduct =(req,res)=>{
    res.send({product:product,message:"successfully Product",success:true})
}
CreateProduct =(req,res)=>{
    const newproduct = {
        id:Date.now(),
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        InStock:true
    }
    product.push(newproduct)
    res.send({message:"successfully Product Created",success:true})
}
Product =(req,res)=>{
    const ID = req.params.ID;
    const productByID = product.filter(p => p.id == ID)
    res.send({product:productByID,message:"successfully Product",success:true})
}
deleteProduct =(req,res)=>{
    const ID = req.params.ID;
    index = product.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"product not found",success:false})
    }
    product.splice(index,1)
    res.status(200).send({message:"Product found",success:true})
}
UpdateProduct =(req,res)=>{
    const ID = req.params.ID;
    index = product.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"product not found",success:false})
    }
    product[index].price = req.body.price
    res.status(200).send({message:"Product Updated",success:true})
}

module.exports = {AllProduct,CreateProduct,Product,deleteProduct,UpdateProduct}