const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Enter the Task name'],
        maxlength: [20,'Keep the name within 20 letters'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Task', TaskSchema);