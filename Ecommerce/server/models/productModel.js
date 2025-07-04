import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import Brand from "../models/brandModel.js"
import Category from "./categoryModel.js";

const Product = sequelize.define('Product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    description:{
        type: DataTypes.STRING()
    },
    price:{
        type: DataTypes.INTEGER,
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull:false
        
    },
    brand_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    Quantity:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    InStock:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    createAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'products',
    timestamps: false
})

Product.belongsTo(Brand, {
    foreignKey: "brand_id",
    as: "Brands"
});

Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: "categories"
});



export default Product;