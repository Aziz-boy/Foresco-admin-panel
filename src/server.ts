console.log("Server is running...");
import dotenv from 'dotenv'; 
dotenv.config();
import mongoose from 'mongoose';   
import app from "./app";


mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB Connection Succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
      console.info(`The server is Running Successfully on: ${PORT}`)
      console.info(`Admin project on http://localhost:${PORT}/admin\n`)
    })
  })
  .catch((err) => console.log("ERROR on Connection MongoDB", err))




