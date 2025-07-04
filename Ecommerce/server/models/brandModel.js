import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Brand = sequelize.define('Brand', {
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
    tableName: 'Brands',
    timestamps: true
});

export default Brand;
