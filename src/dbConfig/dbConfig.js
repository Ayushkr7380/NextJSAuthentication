import mongoose from "mongoose";

export async function connectDB(){
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;
        connection.on('Connected',()=>{
            console.log("Database connected successfully.");
        })

        connection.on("error",(err)=>{
            console.log("Failed to connect to MongoDb database" + err);
            process.exit();
        })
    } catch (error) {
        console.log(error.message);
    }
}