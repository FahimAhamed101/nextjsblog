import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://a4ubeatz:fbeDuAVVc4GH7csX@cluster0.sj0do.mongodb.net/blog-app');
    console.log("DB connected");
}