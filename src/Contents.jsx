
// Import necessary modules from React and react-router-dom
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

// Import components for different routes
import EmployeeList from './EmployeeList.jsx'
import EmployeeReport from './EmployeeReport.jsx'
import EmployeeEdit from './EmployeeEdit.jsx'

// Define a functional component named Contents
export default function Contents() {
    // Define a functional component for handling "Page Not Found" scenario
    const NotFound = () => <h1>Page Not Found</h1>

    // Render routes using React Router's Routes component
    return (
        <Routes>
            {/* Route for displaying employee list */}
            <Route path="/employees" element={<EmployeeList />} />

            {/* Route for editing an employee's details */}
            <Route path="/edit/:id" element={<EmployeeEdit />} />

            {/* Route for generating employee report */}
            <Route path="/report" element={<EmployeeReport />} />

            {/* Default route, redirects to /employees */}
            <Route path="/" element={<Navigate replace to="/employees" />} />

            {/* Catch-all route for handling unknown routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
