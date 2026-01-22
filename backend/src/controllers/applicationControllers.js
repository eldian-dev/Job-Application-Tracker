import Application from "../models/Application.js"; 

export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find(); 
        res.status(200).json(applications); 

    } catch (error) {
        console.error("Error in getAllApplications controller."); 
        res.status(500).json({message:"Internal server error."}); 
    }
}

export const addApplication = async (req, res) => {
    try {
        const {company, role, date, link, contact, status, note, interest} = req.body; 
        const application = new Application({company, role, date, link, contact, status, note, interest}); 
        const newApplication = await application.save(); 
        res.status(201).json(newApplication); 

    } catch (error) {
        console.error("Error in addApplication controller."); 
        res.status(500).json({message:"Internal server error."}); 
    }
}

export const editApplication = async (req,res) => {
    try {
        const {company, role, date, link, contact, status, note, interest} = req.body; 
        const updatedApplication = await Application.findByIdAndUpdate(req.params.id, 
            {company, role, date, link, contact, status, note, interest}, 
            {new:true}); 

        if (!updatedApplication) return res.status(404).json({message:"Application not found."}); 
        res.status(200).json(updatedApplication); 
        
    } catch (error) {
        console.error("Error in editApplication controller."); 
        res.status(500).json({message:"Internal server error."});
    }
}

export const deleteApplication = async(req, res) => {
    try {
        const deletedApplication = await Application.findByIdAndDelete(req.params.id);

        if (!deletedApplication) return res.status(404).json({message:"Application not found."});
        res.status(200).json({message:"Application deleted successfully."}); 

    } catch (error) {
        console.error("Error in deleteApplication controller."); 
        res.status(500).json({message:"Internal server error."});
    }
}