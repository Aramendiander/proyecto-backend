import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const userModel = sequelize.define("user",
{
    id:{
        type: DataTypes.SMALLINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name : {
        type: DataTypes.STRING(30),
    },
    password: {
        type: DataTypes.STRING(100),
    },
    role: {
        type: DataTypes.STRING(10),
    },
})



export default userModel;