import express from "express"; 
import applicationRoutes from "./routes/applicationRoutes.js"
import connectDB from "./config/db.js";
import dotenv from "dotenv"; 
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); 

const app = express(); 
const port = process.env.PORT || 5001; 

app.use(express.json()); 
app.use(rateLimiter); 
app.use("/api/jobs", applicationRoutes); 

connectDB().then(() => {
    app.listen(port, () => {
    console.log("Server running on PORT:", port); 
    }); 
});




