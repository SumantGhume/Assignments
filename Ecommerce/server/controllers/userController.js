import User from '../models/UserModel.js'
import dotenv from 'dotenv'
dotenv.config();
import jwt from 'jsonwebtoken'

export const registerUser = async (req,res)=>{

  const {name,email,password} = req.body;
  
  try{
    // const existingUser = findOne({email})
    // console.log(existingUser)
    // if(existingUser){
    //   res.status(200).send({message:"User already exist",success:false})
    // }
    const newUser = await User.create({name,email,password})
    console.log(newUser)
    res.status(200).send({ message: "successfully User Registered", success: true });
  }catch(error){
    console.log("Error: ",error);
  }
}

const LoginUser = async(req,res)=>{
    // const {email,password} = req.body
    try {
        const loggedInUser = await User.findOne({where:{email:req.body.email,password:req.body.password},attributes: ['id', 'isAdmin']})

        // console.log(loggedInUser, "Login user") ;
        const user = loggedInUser.dataValues
        console.log(user,"User data****")
        const token = jwt.sign(user,process.env.SECREATE_KEY,{expiresIn:'2h'})
        // console.log(token,"Token")
        res.status(200).send({message:"User Loggin successfully", success:true,token:token})
        
    } catch (error) {
        res.status(500).send({error:error})
        
    }
}
 
// const createUser =async (req, res) => {
//   try {
//     const bName = req.params.User_name;
//     index = await User.findIndex((b) => b.User_name == bName);
//     if (index == -1) {
//       const newUser = {
//         User_ID: Date.now(),
//         name: req.body.User_name,
//       };
//       User.push(newUser);
//       res.send({ message: "successfully User Created", success: true });
//     } else {
//       res.send({ message: "User already exists.", success: true });
//     }
//   } catch (error) {
//     res.status(500).send({error:error})
//   }
// };

export const getAllUser = async (req, res) => {
  try {
    const Users = await  User.findAll(); // Fetch all User records from the DB
    console.log(Users)
    res.status(200).send({
      data: Users,
      message: "Successfully fetched all Users",
      success: true
    });
  } catch (error) {
    console.error("Error fetching Users:", error);
    res.status(500).send({
      message: "Failed to fetch Users",
      success: false,
      error: error.message
    });
  }
};



const getUserInfo =async (req,res) =>{
    console.log("req.user",req.user.id)
    try {

        const loggedUser = await User.findOne({where:{id:req.user.id},attributes: ['id','name','email','isAdmin']})
        res.status(200).send({message:"got user info",loggedUser:loggedUser})
            
    } catch (error) {
        res.status(500).send({" at controller":error})
        
    }
}

export default {
  registerUser,
  LoginUser,
  getUserInfo,
  getAllUser

}