
# My Portfolio Project

This project is a portfolio website built with React for the frontend and a backend server using TypeScript. Follow the steps below to set up and run the project.

## Prerequisites

- XAMPP (for MySQL and phpMyAdmin)
- Node.js (for running the frontend and backend)
- TypeScript (for TypeScript support)

## Setting Up the Backend

1. **Start XAMPP Server**:
   - Open XAMPP and start the Apache and MySQL services.

2. **Create Database**:
   - Open phpMyAdmin (usually accessible at `http://localhost/phpmyadmin`).
   - Create a new database for your project.

3. **Navigate to Backend Directory**:
   - Open a terminal and navigate to the backend directory where `Server.tsx` is located:
     ```bash
     cd /path/to/your/project/src
     ```

4. **Run the Backend Server**:
   - Use the following command to start the backend server:
     ```bash
     npx ts-node Server.tsx
     ```

## Setting Up the Frontend

1. **Navigate to Frontend Directory**:
   - Open a new terminal and navigate to the frontend directory of your project.

2. **Install Dependencies**:
   - Install the necessary dependencies using npm or yarn:
     ```bash
     npm install
     # or
     yarn install
     ```

3. **Run the Frontend**:
   - Start the frontend server with the following command:
     ```bash
     npm start
     # or
     yarn start
     ```

## Project Structure

- `src/`: Contains the source code for both frontend and backend.
  - `frontend/`: Contains the React frontend code.
  - `backend/`: Contains the backend server code.

## Additional Notes

- Ensure that your database connection settings in the backend code match the database you created in phpMyAdmin.
- If you encounter any issues, check the terminal output for error messages and resolve them accordingly.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

