# Internship Management System

This project contains a full-stack Internship Management application built with React (frontend) and Node.js/Express (backend) using MongoDB.

## Tech Stack
* **Frontend:** React.js (v16) with Bootstrap.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB (using Mongoose).

## Configuration

1. **Database:** Make sure MongoDB is running on your machine (usually on port 27017). 
2. **Environment Variables:** The backend `.env` is located at `IMS-master/server/.env`.
   - `PORT`: 4002 (Backend API port).
   - `DATABASE`: Connection string (default: `mongodb://localhost/internship`).

## Setup & Running

This project has been pre-configured to run both the client and server concurrently using a root `package.json` file. The Node.js 17+ OpenSSL error has also been fixed automatically.

1. **Install Root Dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Start the Application:**
   Run the following command in the root folder (`IntershipMangement`):
   ```bash
   npm run dev:all
   ```
   This will start both the backend server and the frontend client simultaneously.

### Individual Commands
If you prefer to run them separately:
* **Start Backend Server:** `npm run dev`
* **Start Frontend Client:** `npm run client`

## UI/UX Optimization
The student dashboard (`studentDashboard.css`) has been updated to feature a sleek modern sidebar (glassmorphism/dark styling) and elevated card components with hover effects for a premium feel.

## URLs
- **Frontend App:** http://localhost:3000
- **Backend API:** http://localhost:4002
