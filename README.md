# Task Manager Project

The Task Manager Project is a web-based application that allows users to efficiently manage their tasks. This project is built using Node.js, Express.js, MongoDB, RESTful API architecture, HTML, CSS, and JavaScript. The application provides a user-friendly interface for creating, updating, deleting, and tracking tasks.

[**Visit the page**](https://my-task-manager-a7es.onrender.com/)

## Features

- **Task Management**: Users can create new tasks, update task details, mark tasks as completed, and delete tasks.
- **Responsive Design**: The application is responsive and works seamlessly across different devices.
- **RESTful API**: The application provides a REST API for performing CRUD operations on tasks.
- **MongoDB Database**: Tasks and user information are stored in a MongoDB database.
- **Deployment**: The application is deployed using Render for easy accessibility.

## Tech Stack

- Backend Framework: Node.js with Express.js
- Database: MongoDB
- Frontend: HTML, CSS, JavaScript
- Deployment: Render

## Getting Started

1. Clone the repository: `git clone https://github.com/Soham56/Task-Manager.git`
2. Navigate to the project directory: `cd Task-Manager`
3. Install dependencies: `npm install`
4. Set up your MongoDB database, update the connection string by creating a `.env` file and update the `MONGO_URL` value with that.
5. Start the server: `npm start`
6. Access the application in your browser at `http://localhost:3000`

## API Endpoints

The application provides the following API endpoints for managing tasks:

- `GET /api/v1/tasks`: Get a list of all tasks.
- `GET /api/v1/tasks/:id`: Get details of a specific task.
- `POST /api/v1/tasks`: Create a new task.
- `PATCH /api/v1/tasks/:id`: Update details of a specific task.
- `DELETE /api/v1/tasks/:id`: Delete a specific task.

## Deployment

The application is deployed using Render for easy access. To deploy the application yourself, follow these steps:

1. Create an account on [Render](https://render.com/) if you haven't already.
2. Connect your GitHub repository to Render.
3. Configure the deployment settings according to your project structure.
4. Render will automatically build and deploy your application whenever you push changes to your repository.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

---

Feel free to customize this README according to your project specifics. Include information about any additional features, installation steps, troubleshooting, and more. Good luck with your Task Manager Project!