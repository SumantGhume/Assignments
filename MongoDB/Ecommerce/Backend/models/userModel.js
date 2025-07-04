import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String, required:true},
    password:{type:String, required:true},
    createdAT:{type:Date, default:Date.now()},
    isAdmin:{type:Boolean}
});


const UserModel = mongoose.model('users',UserSchema)

export default UserModel;