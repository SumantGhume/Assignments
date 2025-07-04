import mongoose from "mongoose";

import pkg from 'mongoose';
const { connection } = pkg;

mongoose.connect('mongodb://127.0.0.1:27017/eco_mern',
);

connection.on('connected', ()=>{
    console.log("MongoDB connected Successfully ")
})

connection.on('error', (error)=>{
    console.log("MongoDB connection failed", error);
})

export default mongoose;
