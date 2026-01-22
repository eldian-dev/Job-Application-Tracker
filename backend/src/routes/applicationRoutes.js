import express from "express"; 
import { getAllApplications,
        getApplicationById, 
        addApplication,
        editApplication,
        deleteApplication
 } from "../controllers/applicationControllers.js";

const router = express.Router(); 

router.get("/", getAllApplications); 
router.get("/:id", getApplicationById); 
router.post("/", addApplication);
router.put("/:id", editApplication);
router.delete("/:id", deleteApplication); 

export default router; 
