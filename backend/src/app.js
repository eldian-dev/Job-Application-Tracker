import express from "express"; 
import applicationRoutes from "./routes/applicationRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"; 

dotenv.config(); 

const app = express(); 
const port = process.env.PORT || 5001; 

connectDB();

app.use("/api/jobs", applicationRoutes); 

app.listen(port, () => {
    console.log("Server running on PORT:", port); 
}); 



