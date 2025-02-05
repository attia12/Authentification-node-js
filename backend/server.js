import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";
const app=express();
dotenv.config();
const PORT=process.env.PORT || 5000 ;
app.use(express.json()); // parse json request body
app.use(cookieParser());
app.use("/api/v1/auth",authRoutes);



app.listen(PORT,()=> {
  console.log(`Server running on port ${PORT}`)  
  connectDb();
});