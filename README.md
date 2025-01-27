# Portfolio-Backend/Comment Management API

This is a backend API built with Node.js, Express, and MongoDB for managing comments. It supports creating, retrieving, and deleting comments, and it is designed to work seamlessly with the front-end of my portfolio website.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live API](#live-api)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Add Comments**: Users can submit comments that are stored in MongoDB.
- **Retrieve Comments**: Fetch all comments to display on the front end.
- **Cross-Origin Resource Sharing (CORS)**: Configured to allow requests from the front-end hosted on Vercel.

---

## Technologies Used
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (via Mongoose)
- **Environment Management**:
  - dotenv for environment variables
- **Security**:
  - CORS for cross-origin request handling

---

## Live API
The API is integrated into my live portfolio site:  
**[Sean Hyde's Portfolio](https://sean-hyde-portfolio.vercel.app/)**

---

## Folder Structure
- **`server.js`**: Main server entry point. Configures middleware, sets up MongoDB connection, and listens for incoming requests.
- **`commentModel.js`**: Mongoose schema and model for comments.
- **`commentRoutes.js`**: Defines API routes for comment management (`GET`, `POST`, and `DELETE`).

---

