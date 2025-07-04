import Product from '../models/productModel.js'

const createProduct = async (req,res)=>{
  
  try{
    // const {name} = req.body;
    // console.log({name})
    const newProduct = await Product.create(req.body)
    console.log(newProduct)
    res.status(200).send({ message: "successfully Product Created", success: true });
  }catch(error){
    console.log("Error: ",error);
  }
}
 
// const createProduct =async (req, res) => {
//   try {
//     const bName = req.params.Product_name;
//     index = await Product.findIndex((b) => b.Product_name == bName);
//     if (index == -1) {
//       const newProduct = {
//         Product_ID: Date.now(),
//         name: req.body.Product_name,
//       };
//       Product.push(newProduct);
//       res.send({ message: "successfully Product Created", success: true });
//     } else {
//       res.send({ message: "Product already exists.", success: true });
//     }
//   } catch (error) {
//     res.status(500).send({error:error})
//   }
// };

const getAllProduct = async (req, res) => {
  try {
    const Products = await  Product.findAll(); // Fetch all Product records from the DB
    const AllPro = Products
    console.log(Products)
    res.status(200).send({AllPro:AllPro,success:true});
  } catch (error) {
    console.error("Error fetching Products:", error);
    res.status(500).send({
      message: "Failed to fetch Products",
      success: false,
      error: error.message
    });
  }
};
const getProductCount = async (req, res) => {
  try {
    const ProductsCount = await  Product.count(); // Fetch all Product records from the DB
    console.log(ProductsCount)
    res.status(200).send({
      data: ProductsCount,
      message: "We Successfully get Product Count",
      success: true
    });
  } catch (error) {
    console.error("Error in geting Products count:", error);
    res.status(500).send({
      message: "Error in geting Products count:",
      success: false,
      error: error.message
    });
  }
};


const getProductByID = async(req, res) => {
  try {
    const id = req.params.ID; // Get ID from URL params
    const ProductByID = await Product.findByPk(id); // Await the DB result
    console.log(ProductByID)
    res.send({
      Product: ProductByID,
      message: "successfully Product",
      success: true,
    });
  } catch (error) {
    res.status(500).send({error:error})
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.ID;
    const product = await Product.findByPk(id);
    

    if (!product) {
      return res.status(404).send({ message: "Product not found", success: false });
    }

    product.name = req.body.name;
    await product.save(); 

    res.status(200).send({ message: "Product updated", success: true });
  } catch (error) {
    console.error("Error updating Product:", error);
    res.status(500).send({ message: "Update failed", success: false, error: error.message });
  }
};


const deleteProduct = async(req, res) => {
  try {
    const id = req.params.ID;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).send({ message: "Product not found", success: false });
    }
    product.destroy();
    res.status(200).send({ message: "Product found and deleted", success: true });
  } catch (error) {
    res.status(500).send({error:error})
  }
};

const getProductByQuery = async(req,res) =>{

  try{
    const id = req.query.ID;  
    const product = await Product.findByPk(id);
    console.log(product)


    const bname = req.query.name;
    console.log(bname)
    const ProductName = await Product.findOne({where:{name:bname}})
    
    if(product&&ProductName){
      res.status(202).send({product})
    }

  }catch(error){
    console.log("error: ",error)
  }
    
    
}

export default {
  createProduct,
  getAllProduct,
  getProductCount,
  getProductByID,
  updateProduct,
  deleteProduct,
  getProductByQuery
};
