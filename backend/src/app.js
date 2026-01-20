import express from "express"; 
import applicationRoutes from "./routes/applicationRoutes.js"

const app = express(); 
const port = 5001; 

app.use("/api/jobs", applicationRoutes); 

app.listen(port, () => {
    console.log("Server running on PORT: 5001.")
}); 




