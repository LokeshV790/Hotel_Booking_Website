import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongodb Disconnected.")
})

mongoose.connection.on("connected", ()=>{
    console.log("Mongodb Connected.")
})

app.listen(8800, () => {
  console.log("Connected to backend..on port : 8800");
  connect();
});
