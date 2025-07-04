import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'Categories',
    timestamps: false
});

export default Category;
