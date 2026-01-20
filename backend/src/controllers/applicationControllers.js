export const getAllApplications = (req, res) => {
    res.status(200).json({message:"All applications."}); 
}

export const addApplication = (req, res) => {
    res.status(201).json({message:"Application added successfully."}); 
}

export const editApplication = (req, res) => {
    res.status(200).json({message:"Application edited successfully."}); 
}

export const deleteApplication = (req, res) => {
    res.status(200).json({message:"Application deleted successfully."}); 
}

