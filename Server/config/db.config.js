import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

var dbUrl = process.env.DB_URL;

const connection  = async ()=>{
    try {
        await mongoose.connect(dbUrl);
        console.log("Database Connected successfully..!!");
    } catch (error) {
        console.log("Error While Database Connection"+error)
    }
}

export default connection;