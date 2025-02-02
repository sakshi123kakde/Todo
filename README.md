📝 React Todo List App
A Task Management Application built with React.js that allows users to efficiently manage their tasks by adding, categorizing, prioritizing, and setting due dates. The app integrates with a backend API to store and fetch tasks, offering a seamless experience for task tracking.

🚀 Features
✅ Add Tasks: Create tasks with text, category, priority, and due date.
✅ Task Categories: Classify tasks as Work, Personal, or Shopping.
✅ Set Priorities: Choose from High, Medium, or Low priority levels.
✅ Due Date Management: Tasks display statuses like Overdue, Due Today, or Upcoming.
✅ Mark Complete: Toggle tasks as Complete or Incomplete.
✅ Delete Tasks: Remove tasks from the list.

🛠️ Technologies Used
Frontend: Vite + React
Styling: CSS(bootstrap)
Backend API : Node.js/Express.js +Mongoose

🚀 How to Run the Project Clone the repository:

📦 1. Clone the Repository
-git clone https://github.com/sakshi123kakde/Todo.git
Navigate to the project folder:
-cd Todo

🛠️ 2. Backend Setup
Navigate to the server folder:
-cd server
Install backend dependencies:
-npm install
Create a .env file in the server folder and add the following:
-MONGODB_URI=your_mongodb_connection_string

Start the backend server using Nodemon:
nodemon server.js
Verify the backend server is running at:http://localhost:5000

💻 3. Frontend Setup
Open a new terminal and navigate to the client folder:
cd client

Install frontend dependencies:
npm install

Start the Vite development server:
npm run dev

Open your frontend in the browser:http://localhost:5173

🔗 4. Verify Connection
Ensure both servers are running:
Frontend: http://localhost:5173
Backend: http://localhost:5000

Test API routes and ensure smooth interaction between frontend and backend.
📂 Project Structure

Frontend (Client)
/client
├── src
│ ├── assets
│ ├── components
│ │ ├── TaskInput.jsx
│ │ ├── TaskItem.jsx
│ │ ├── TaskList.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── public
├── index.html
├── vite.config.js
└── package.json

Backend (Server)
/server
├── config
│ ├── db.js
├── models
│ ├── taskModel.js
├── routes
│ ├── taskRoutes.js
├── .env
├── server.js
├── package.json
└── README.md

🤝 5. Contributing
Contributions are welcome! Please follow these steps:

⭐ 6. Show Support
If you like this project, please consider giving it a ⭐ on GitHub!
