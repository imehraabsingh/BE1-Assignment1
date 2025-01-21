// Step 1: Import required modules
const express = require('express'); // For creating the server
const fs = require('fs');          // To handle file operations
const path = require('path');      // To manage file paths

// Step 2: Initialize the Express.js application
const app = express();
const PORT = 3000; // Define the port for the server

// Step 3: Implement middleware to capture request details
app.use((req, res, next) => {
    const logEntry = {
        timestamp: new Date().toISOString(), // Current date and time
        ip: req.ip,                         // Client's IP address
        url: req.originalUrl,               // Requested URL
        protocol: req.protocol,             // Protocol (http/https)
        method: req.method,                 // HTTP method (GET, POST, etc.)
        hostname: req.hostname              // Hostname of the request
    };

    // Step 4: Write Request Details to a Log File
    const logFilePath = path.join(__dirname, 'requests.log'); // Path to the log file
    const logData = JSON.stringify(logEntry) + '\n'; // Convert log entry to JSON and add a new line

    fs.appendFile(logFilePath, logData, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });

    next(); // Pass control to the next middleware or route handler
});

// Step 5: Define a dummy route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Respond with a message
});

// Step 6: Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
