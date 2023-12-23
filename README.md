# Real-Time Tracking Service

## Overview

The Real-Time Tracking Service is a web application that allows tracking and summarizing user page transitions in real-time. It consists of a server-side component built with Node.js and Express, a client-side component using Socket.IO for real-time communication, and MongoDB for data storage.

## Project Structure

The project is organized into the following structure:


- **`src/server/app.js`**: Main server setup using Express.
- **`src/server/socket.js`**: Socket.IO setup for real-time communication.
- **`src/server/routes/api.js`**: API route definitions for the server.
- **`src/server/models/PageTransition.js`**: MongoDB model for storing page transition data.
- **`client/socket-client.js`**: Client-side script for emitting page transition events.

# Usage

**Page Transition Events:**
The client emits a "pageVisit" event to the server whenever a page transition occurs. The server saves the data in the MongoDB database.

**API Endpoint `/api/summarizedData`:**
Retrieve summarized page transition data based on user ID and optional data time.

# Dependencies

- Node.js
- Express
- Socket.IO
- MongoDB
- Mongoose


