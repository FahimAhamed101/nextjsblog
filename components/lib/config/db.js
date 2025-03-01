import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.2o1ap.mongodb.net/blog-app1');
    console.log("DB connected");
}