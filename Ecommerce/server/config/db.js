import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config();

export const sequelize = new Sequelize(

    process.env.DATABASE,
    process.env.USRE,
    process.env.PASSWORD,
    {
        host:process.env.HOST,
        dialect:"mysql",
        logging:false,
        dialectOptions:{}
    }

); 

(async()=>{

    try{

        await sequelize.authenticate();
        console.log("Connected to database successfully");
        await sequelize.sync({alter:false});

    }catch(error){

        console.log("Connection Error");
        console.log(error)
        process.exit(1);
    
    }
})()





