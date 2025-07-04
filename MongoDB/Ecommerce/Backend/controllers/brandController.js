import Brand from '../models/brandModel.js'

const createBrand = async (req,res)=>{
  console.log(req.body)
  console.log(req.user.isAdmin)
  const {name} = req.body
  try{

    if(req.user.isAdmin){
      const {name} = req.body;
    console.log({name})
    const newBrand = await Brand.create({name})
    console.log(newBrand)
    res.status(200).send({ message: "successfully Brand Created", success: true });
      
    }else{
      res.status(401).send({messageP:"Not Authorized"})
    }

    
  }catch(error){
    console.log("Error: ",error);
  }
}
 
// const createBrand =async (req, res) => {
//   try {
//     const bName = req.params.Brand_name;
//     index = await Brand.findIndex((b) => b.Brand_name == bName);
//     if (index == -1) {
//       const newBrand = {
//         Brand_ID: Date.now(),
//         name: req.body.Brand_name,
//       };
//       Brand.push(newBrand);
//       res.send({ message: "successfully Brand Created", success: true });
//     } else {
//       res.send({ message: "Brand already exists.", success: true });
//     }
//   } catch (error) {
//     res.status(500).send({error:error})
//   }
// };

const getAllBrand = async (req, res) => {
  try {
    const brands = await  Brand.findAll(); // Fetch all brand records from the DB
    console.log(brands)
    res.status(200).send({
      data: brands,
      message: "Successfully fetched all brands",
      success: true
    });
  } catch (error) {
    console.error("Error fetching brands:", error);
    res.status(500).send({
      message: "Failed to fetch brands",
      success: false,
      error: error.message
    });
  }
};


const getBrandByID = async(req, res) => {
  try {
    const id = req.params.ID; // Get ID from URL params
    const BrandByID = await Brand.findByPk(id); // Await the DB result
    console.log(BrandByID)
    res.send({
      Brand: BrandByID,
      message: "successfully Brand",
      success: true,
    });
  } catch (error) {
    res.status(500).send({error:error})
  }
};

const updateBrand = async (req, res) => {
  try {
    const id = req.params.ID;
    const brand = await Brand.findByPk(id);
    

    if (!brand) {
      return res.status(404).send({ message: "Brand not found", success: false });
    }

    brand.name = req.body.name;
    await brand.save(); 

    res.status(200).send({ message: "Brand updated", success: true });
  } catch (error) {
    console.error("Error updating brand:", error);
    res.status(500).send({ message: "Update failed", success: false, error: error.message });
  }
};


const deleteBrand = async(req, res) => {
  try {
    const id = req.params.ID;
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).send({ message: "Brand not found", success: false });
    }
    brand.destroy();
    res.status(200).send({ message: "Brand found and deleted", success: true });
  } catch (error) {
    res.status(500).send({error:error})
  }
};

const getBrandByQuery = async(req,res) =>{

  try{
    const id = req.query.ID;  
    const brand = await Brand.findByPk(id);
    console.log(brand)
    const bname = req.query.name;

    console.log(bname)
    const brandName = await Brand.findOne({where:{name:bname}})
    
    if(bname&&brandName){
      res.status(202).send({brand})
    }

  }catch(error){
    console.log("error: ",error)
  }
    
    
}

export default {
  createBrand,
  getAllBrand,
  getBrandByID,
  updateBrand,
  deleteBrand,
  getBrandByQuery
};
