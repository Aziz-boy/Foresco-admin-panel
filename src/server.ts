 //Ecmajs ni ishlatyapmiz
console.log("Server is running...");

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose
   .connect(process.env.MONGO_URL as string, {})
   .then((data) => {
    console.log("MongoDB Connection Succeed");
    const PORT = process.env.PORT ?? 3003;
   })
   .catch((err) => console.log("ERROR on Connection MongoDB", err))




