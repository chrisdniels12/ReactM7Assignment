
// Import necessary modules
import express from 'express'
import {} from 'dotenv/config' // Load environment variables from .env file
import routes from './routes/routes.js' // Import routes
import connectDB from './db/connect.js' // Database connection function
import bodyParser from 'body-parser' // Middleware to parse incoming request bodies
import path from 'path' // Node.js module for handling file paths

const app = express() // Initialize Express application

// Serve static files from the 'public' directory
app.use(express.static('public'))

// Parse urlencoded and json bodies from incoming requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Route requests to the defined routes
app.use('/', routes)

// Catch-all route to serve index.html for any other route not matched
app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

const PORT = process.env.PORT || 5000 // Set port for the server

// Initialize server and connect to the database
const init = async () => {
    try {
        await connectDB(process.env.DB) // Connect to the database using environment variable
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)) // Start server
    } catch (err) {
        console.log(err) // Log any errors that occur during initialization
    }
}
init() // Call the initialization function
