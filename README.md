# sampleExpressProject

## Description
This is an Express.js application designed for basic API development. It features a simple in-memory user management system with CRUD operations.

## Features
- Home route that returns "hello world".
- API route that returns a JSON message.
- User routes for creating, reading, updating, and deleting users.

## Installation

1. Clone the repository:
    ```bash
      git clone https://github.com/88chinu/expressProjectLevel1.git
2.Navigate into the project directory:
    ```
    
      cd expressProjectLevel1

3.Install dependencies:
    ```

      npm install

4 .Start the application:
    ```
      
      npm start
      
## Usage
Access the home route at http://localhost:5000/.
Access the API route at http://localhost:5000/api to see the JSON response.

### User Routes
- GET /users: Retrieve all users.
- GET /users/
  : Retrieve a user by ID.
- POST /users: Add a new user.
  -  Request body should include first_name, last_name, and email.
- PATCH /users/
  : Update a user's information by ID.
  - Request body can include first_name, last_name, or email.
- DELETE /users/
  : Delete a user by ID.
  
## Scripts
Start the application:
    ```
    
    npm start
- Test: Currently, there are no tests specified.

## Dependencies
This project uses the following dependencies:
 - express: Web framework for Node.js
 - uuid: Library for generating unique identifiers
   
## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License
This project is licensed under the ISC License - see the LICENSE file for details.

#### Feel free to modify any sections or add additional information as needed! If you have specific features or any other details to include, let me know!
