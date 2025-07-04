import { where } from 'sequelize';
import Category from '../models/categoryModel.js'

const createCategory = async (req,res)=>{
  
  try{
    const {name} = req.body;
    console.log({name})
    const newCategory = await Category.create({name})
    console.log(newCategory)
    res.status(200).send({ message: "successfully Category Created", success: true });
  }catch(error){
    console.log("Error: ",error);
  }
}
 
// const createCategory =async (req, res) => {
//   try {
//     const bName = req.params.Category_name;
//     index = await Category.findIndex((b) => b.Category_name == bName);
//     if (index == -1) {
//       const newCategory = {
//         Category_ID: Date.now(),
//         name: req.body.Category_name,
//       };
//       Category.push(newCategory);
//       res.send({ message: "successfully Category Created", success: true });
//     } else {
//       res.send({ message: "Category already exists.", success: true });
//     }
//   } catch (error) {
//     res.status(500).send({error:error})
//   }
// };

const getAllCategory = async (req, res) => {
  try {
    const Categories = await  Category.findAll(); // Fetch all Category records from the DB
    console.log(Categories)
    res.status(200).send({
      data: Categories,
      message: "Successfully fetched all Categories",
      success: true
    });
  } catch (error) {
    console.error("Error fetching Categories:", error);
    res.status(500).send({
      message: "Failed to fetch Categories",
      success: false,
      error: error.message
    });
  }
};


const getCategoryByID = async(req, res) => {
  try {
    const id = req.params.ID; // Get ID from URL params
    const CategoryByID = await Category.findByPk(id); // Await the DB result
    console.log(CategoryByID)
    res.send({
      Category: CategoryByID,
      message: "successfully Category",
      success: true,
    });
  } catch (error) {
    res.status(500).send({error:error})
  }
};

const updateCategory = async (req, res) => {
  try {
    const id = req.params.ID;
    const category = await Category.findByPk(id);
  
    if (!category) {
      return res.status(404).send({ message: "Category not found", success: false });
    }

    category.name = req.body.name;
    await category.save(); 

    res.status(200).send({ message: "Category updated", success: true });
  } catch (error) {
    console.error("Error updating Category:", error);
    res.status(500).send({ message: "Update failed", success: false, error: error.message });
  }
};


const deleteCategory = async(req, res) => {
  try {
    const id = req.params.ID;
    const Category = await Category.findByPk(id);
    if (!Category) {
      return res.status(404).send({ message: "Category not found", success: false });
    }
    Category.destroy();
    res.status(200).send({ message: "Category found and deleted", success: true });
  } catch (error) {
    res.status(500).send({error:error})
  }
};

const getCategoryByQuery = async(req,res) =>{

  try{
    const id = req.query.ID;  
    const Category = await Category.findByPk(id);
    console.log(Category)
    const bname = req.query.name;

    console.log(bname)
    const CategoryName = await Category.findOne({where:{name:bname}})
    
    if(bname&&CategoryName){
      res.status(202).send({Category})
    }

  }catch(error){
    console.log("error: ",error)
  }
    
     
}

export default {
  createCategory,
  getAllCategory,
  getCategoryByID,
  updateCategory,
  deleteCategory,
  getCategoryByQuery
};
