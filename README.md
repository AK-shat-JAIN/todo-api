# To-Do List API (Node.js + Express + MongoDB)

Description

This is a simple REST API for managing a to-do list. The API allows users to create, read, update, and delete tasks. The backend is built using Node.js, Express, and MongoDB (via Mongoose). This project is ideal for learning the basics of REST API development and MongoDB integration.

---

## Features

- **Create Task** – Add a new task with title, description, and status.
- **Fetch All Tasks** – Retrieve all tasks from the database.
- **Fetch Task by ID** – Retrieve a specific task by its ID.
- **Update Task** – Update the status of a task.
- **Delete Task** – Remove a task by its ID.

---

## Technologies Used

- **Node.js** – Backend runtime.
- **Express** – Web framework for handling routes.
- **MongoDB** Atlas – Cloud-hosted NoSQL database.
- **Mongoose** – ODM for MongoDB.
- **Postman** – API testing.

---

## Project Setup

1. **Clone the Repository**
   
   ```bash
   git clone https://github.com/AK-shat-JAIN/todo-api.git
   cd LMS-Project

2. **Install Dependencies**

   ```bash
   npm install

3. **Configure Environment Variables**
Create a `.env` file in the project root and add the following:

    ```bash
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todoapp?retryWrites=true&w=majority

- Replace <username> and <password> with your MongoDB Atlas credentials.
- Replace todoapp with your preferred database name.
- Security Tip: Do not hardcode sensitive credentials. Use environment variables and add .env to .gitignore to prevent it from being pushed to the repository.

4. **Start the Server**

   ```bash
   # Development mode
    npm run dev

    # Production mode
    npm start
