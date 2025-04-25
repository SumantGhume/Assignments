const category =[ {id:1,category:"Electronic",InStock:true},
    {id:2,category:"cloth",InStock:true}
]

AllCategory =(req,res)=>{
    res.send({category:category,message:"successfully category",success:true})
}
CreateCategory =(req,res)=>{
    const newcategory = {
        id:Date.now(),
        category:req.body.category,
        InStock:true
    }
    category.push(newcategory)
    res.send({message:"successfully category Created",success:true})
}
CategoryByID =(req,res)=>{
    const ID = req.params.ID;
    const categoryByID = category.filter(p => p.id == ID)
    res.send({category:categoryByID,message:"successfully category",success:true})
}
deleteCategory =(req,res)=>{
    const ID = req.params.ID;
    index = category.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"category not found",success:false})
    }
    category.splice(index,1)
    res.status(200).send({message:"category found",success:true})
}
UpdateCategory =(req,res)=>{
    const ID = req.params.ID;
    index = category.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"category not found",success:false})
    }
    category[index].category = req.body.category
    res.status(200).send({message:"category Updated",success:true})
}

module.exports = {AllCategory,CreateCategory,CategoryByID,deleteCategory,UpdateCategory}