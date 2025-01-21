const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000; // You can set any port

// Middleware to log request information
app.use((req, res, next) => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        ipAddress: req.ip,
        url: req.originalUrl,
        protocol: req.protocol,
        method: req.method,
        hostname: req.hostname,
    };

    const logFilePath = path.join(__dirname, 'requests.log');
    const logLine = JSON.stringify(logEntry) + '\n';

    // Append the log entry to the file
    fs.appendFile(logFilePath, logLine, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });

    console.log('Logged Request:', logEntry); // For debugging
    next();
});

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
