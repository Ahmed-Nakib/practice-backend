import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app"

dotenv.config();

const port = process.env.PORT || "5000";

const uri = process.env.MONGODB_URI as string;


const bootstrap = async () => {

  await mongoose.connect(uri)
  console.log("Mongodb Connected");
  
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
}


bootstrap()