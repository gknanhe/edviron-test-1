const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    phone_number: [String],
    edviron_id: Number,
    school_generated_id: String,
    school_id: mongoose.Schema.Types.ObjectId,
    class: String,
    section: String,
    category: String,
    dob: Date,
    gender: String,
    previous_session_dues: Number,
    updatedAt: Date,
    additional_details: {
        aadhaar_number: String,
        address: {
            father_name: String,
            mother_name: String,
        },
    },
});

// Create and export the Student model
module.exports = mongoose.model('Student', studentSchema);
