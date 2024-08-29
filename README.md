Todo App
Overview
This is a Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage their tasks with features to add, edit, and delete todos.

Prerequisites
Node.js: Ensure you have Node.js installed. You can download it from nodejs.org.
npm: Node.js comes with npm (Node Package Manager). Verify the installation by running npm -v in your terminal.
MongoDB: You need a MongoDB server. You can use a local instance or a cloud-based service like MongoDB Atlas.
Installation
1. Clone the Repository
Clone the repository to your local machine:


git clone https://github.com/Nikhil-Mandia/Todo_Backend.git
git clone https://github.com/Nikhil-Mandia/Todo_Frontend.git


2. Set Up the Backend
Navigate to the backend directory:


cd Todo_Backend
Install Dependencies


npm install
Configure Environment Variables

Create a .env file in the root of the backend directory and add your environment variables. Example:



MONGODB_URI=your_mongodb_uri
PORT=5000
Start the Backend Server


npm start
The backend server will start on http://localhost:5000 by default.

3. Set Up the Frontend
Navigate to the frontend directory:


cd Todo_Frontend
Install Dependencies


npm install
Configure Environment Variables

Create a .env file in the root of the frontend directory and add your environment variables if needed. Example:


REACT_APP_API_URL=http://localhost:5000
Start the Frontend Server


npm start
The frontend server will start on http://localhost:3000 by default.

Usage
Open your browser and go to http://localhost:3000 to access the application.
Use the interface to add, edit, and delete todos.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.

Contact
For questions or feedback, please contact nikhilmandia7@gmail.com or open an issue on GitHub.
