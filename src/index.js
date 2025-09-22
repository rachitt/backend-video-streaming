import 'dotenv/config';
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import {app} from "./app.js";

const port = process.env.PORT || 3000;
connectDB();

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})