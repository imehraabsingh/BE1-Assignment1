# BE1-Assignment1

## About the Project
This project is designed to log request details for every incoming request in an Express.js application. It uses middleware to capture essential request information and the `fs` module to store these details in a log file, providing hands-on experience with backend development concepts.

## Key Functionalities
- **Detailed Request Logging**: Captures and stores request details, including timestamp, IP address, URL, HTTP method, protocol, and hostname.
- **File-Based Logging**: All request logs are saved in a structured JSON format using the `fs.appendFile()` method.
- **Express Middleware**: Implements middleware to handle request processing dynamically.

## Requirements
Before running the application, ensure the following are installed:
- **Node.js** (Recommended: Latest LTS version)
- **npm** (Included with Node.js)

## How to Use

### 1. Clone the Repository
```bash
git clone <repository-url>
cd BE1-Assignment1
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
Start the server:
```bash
node server.js
```
The server will run on `http://localhost:3000`. Use your browser or tools like Postman to interact with it.

## How It Works
1. **Middleware Functionality**:  
   - Captures request details such as timestamp, IP, and URL.  
   - Formats these details into a JSON object.

2. **Logging**:  
   - Logs are appended to `requests.log`.  
   - Each log entry is written as a new line, making the file easily readable.

3. **Custom Routes**:  
   - The application includes a default route that welcomes users:
   ```javascript
   app.get('/', (req, res) => {
       res.send('Welcome to the BE1 Assignment!');
   });
   ```

## Additional Notes
- The log file (`requests.log`) is automatically created in the project directory if it doesn’t already exist.
- You can extend the functionality by:
  - Logging additional details (e.g., query parameters, headers, or user-agent).
  - Implementing log rotation for large files.

## Why This Project?
This assignment is designed to:
- Demonstrate the usage of middleware in Express.js.
- Provide practical experience with the `fs` module for file operations.
- Highlight the importance of request tracking in web applications.

## References
- [Express.js Documentation](https://expressjs.com/)
- [Node.js File System Module](https://nodejs.org/api/fs.html)
- [HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
  
