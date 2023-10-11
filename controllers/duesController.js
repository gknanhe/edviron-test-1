const Due = require('../models/due.js');
const Student = require('../models/student.js'); 

// Create a new route to fetch all due documents
 module.exports.defaulters  = async (req, res) => {
    try {
        // Assuming you have a due_date in the past
        const currentDate = new Date();
        // Use Mongoose to query the "Due" model to retrieve all due documents
        const dues = await Due.find({
            due_date: { $lt: currentDate }
        }).distinct('student');

        // Use the list of student IDs to fetch the corresponding students
        const defaulters = await Student.find({
            _id: { $in: dues }
        });

        // Send the defaulters (students) as a JSON response
        console.log(defaulters.length);
        res.json(defaulters);
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error('Error fetching defaulters:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}