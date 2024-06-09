
import mongoose from 'mongoose'

// Define schema for Employees collection
const EmployeesSchema = new mongoose.Schema({
    // Field for employee's name
    name: { 
        type: String, 
        required: [true, 'Name required'] // Validation rule: Name is required
    },

    // Field for employee's extension number
    extension: { 
        type: Number, 
        required: [true, 'Extension required'] // Validation rule: Extension is required
    },

    // Field for employee's email address
    email: { 
        type: String, 
        required: [true, 'Email required'] // Validation rule: Email is required
    },

    // Field for employee's job title
    title: { 
        type: String, 
        required: [true, 'Title required'] // Validation rule: Title is required
    },

    // Field for employee's date of hiring
    dateHired: { 
        type: Date, 
        default: Date.now // Default value: Current date and time
    },

    // Field indicating whether the employee is currently employed
    currentlyEmployed: {
        type: Boolean,
        default: true // Default value: true (currently employed)
    }
})

// Export mongoose model for Employees collection based on the defined schema
export default mongoose.model('Employee', EmployeesSchema)
