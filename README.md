# To-Do List Application

This project encompasses both the backend and frontend implementations of a To-Do List application. The backend provides a RESTful API for managing tasks, while the frontend is built using Angular framework for a seamless user experience.

## Features

The application offers the following features:

- Create a new task
- Read a list of tasks
- Read a specific task by ID
- Update a task
- Delete a task
- Filter tasks by status (pending/completed)

Each task includes the following properties:

- Title: The title or name of the task
- Description: A description or additional information about the task
- Date: The due date or deadline of the task
- Status: The status of the task (either "pending" or "completed")

## API Endpoints

### Backend API

The following API endpoints are available for the backend:

- `GET /api/tasks`: Retrieves a list of all tasks
- `GET /api/tasks/:id`: Retrieves a specific task by ID
- `POST /api/tasks`: Creates a new task
- `PUT /api/tasks/:id`: Updates a specific task by ID
- `DELETE /api/tasks/:id`: Deletes a specific task by ID

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/)
- Angular CLI: Install globally using `npm install -g @angular/cli`
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

### Backend

1. Clone the repository for the backend:

    ```sh
    git clone https://github.com/your-username/todo-list-backend.git
    ```

2. Navigate to the backend project directory:

    ```sh
    cd todo-list-backend
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variable to the `.env` file:

     ```sh
     MONGO_DB_URI=<your-mongodb-uri>
     ```

     Replace `<your-mongodb-uri>` with your MongoDB database URI.

5. Start the server:

    ```sh
    npm start
    ```

6. The server should be running at `http://localhost:3005`.

### Frontend

1. Clone the repository for the frontend:

    ```sh
    git clone https://github.com/your-username/todo-list-frontend.git
    ```

2. Navigate to the frontend project directory:

    ```sh
    cd todo-list-frontend
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    ng serve
    ```

5. The frontend should be accessible at `http://localhost:4200`.

## API Request Example

- Access the frontend at `http://localhost:4200` to interact with the application.
- Utilize API tools like Postman or cURL to interact directly with the backend API endpoints.

Here are some example API requests:

- GET all tasks: `GET http://localhost:3005/api/tasks`
- GET a specific task: `GET http://localhost:3005/api/tasks/:id`
- POST a new task: `POST http://localhost:3005/api/tasks`
  - Request body:

    ```json
        {
        "title": "Complete Project Proposal",
        "description": "Write and finalize the project proposal document.",
        "date": "2023-07-06",
        "status": "pending"
        }
    ```

- PUT (update) a task: `PUT http://localhost:3005/api/tasks/:id`
  - Request body:

    ```json
        {
        "title": "Updated Task Title",
        "description": "Updated task description",
        "date": "2023-07-07",
        "status": "completed"
        }
    ```

- DELETE a task: `DELETE http://localhost:3005/api/tasks/:id`

## Contribution

Contributions are welcome! Feel free to:

- Report issues or bugs
- Suggest new features or improvements
- Submit pull requests

Please follow the contribution guidelines in the respective repositories.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Angular](https://angular.io/)
- [Angular CLI](https://github.com/angular/angular-cli)

## Contact

For any questions or inquiries, please contact [luisamartinez030503@gmail.com](mailto:luisamartinez030503@gmail.com).

Thank you for using the To-Do List Application!
