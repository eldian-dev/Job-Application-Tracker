import mongoose from "mongoose"; 

const applicationSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true
    }, 
    role:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    }, 
    status:{
        type: String,
        enum: ['Pending',
                'Initial Interview',
                'Interview', 
                'Offer', 
                'Rejected',
                'Accepted', 
                'Withdrawn', 
                'Follow-up', 
                'No Response'
        ],
        default: 'Pending',
        required: true
    }, 
    note:{
        type: String,
        required: false
    }, 
    interest:{
        type: String, 
        enum: ['Low', 
                'Medium',
                'High'
        ], 
        default: 'Medium',
        required: false, 
    }
});

const Application = mongoose.model("Application", applicationSchema); 

export default Application; 

