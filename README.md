![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)

**🚀 Pro-Tasker App**
*📌 Description*

Pro-Tasker is a full-stack project management application that allows users to create, manage, and track projects and tasks efficiently.

Users can:

Register and log in securely using JWT authentication
Create, update, and delete projects
Manage tasks within each project
Organize tasks by status (To Do, In Progress, Done)

This app demonstrates full-stack development using modern technologies including React, Node.js, Express, and MongoDB.

**🌐 Live Demo**

👉 The URL for my deployed backend web service on Render: https://pro-tasker-14a3.onrender.com
👉 The URL for your deployed frontend static site on Netlify: https://pro-tasker100.netlify.app

**🛠️ Tech Stack**
Frontend
React (Vite)
React Router
Axios
Context API (Authentication)
Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
**⚙️ Setup & Installation**
*1. Clone the repository*
git clone https://github.com/your-username/pro-tasker.git
cd pro-tasker
*2. Backend Setup*
cd backend
npm install

Create a .env file in the backend folder:

PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the backend server:

npm run dev
*3. Frontend Setup*
cd ../frontend
npm install

Run the frontend:

npm run dev
*4. Open the App*

Visit:

http://localhost:5173
**🔐 Authentication**

This app uses JWT-based authentication:

Token is stored in localStorage
Sent in headers for protected routes:
Authorization: Bearer <token>

**📡 API Endpoints**

👤 User Routes (/api/users)
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Login user and return JWT
GET	/	Get current authenticated user

**📁 Project Routes (/api/projects)**

Method	Endpoint	Description
GET	/	Get all projects for logged-in user
POST	/	Create a new project
GET	/:id	Get a single project with tasks
PUT	/:id	Update a project
DELETE	/:id	Delete a project
*✅ Task Routes (/api/projects/:projectId/tasks)*

Method	Endpoint	Description
POST	/	Create a new task in a project
PUT	/:taskId	Update a task
DELETE	/:taskId	Delete a task
**🧠 Features**

🔐 Secure authentication with JWT
📁 Project management (CRUD)
✅ Task management within projects
📊 Task status organization (Kanban-style)
⚡ Fast and responsive UI

**🚧 Future Improvements**

Drag-and-drop task board (like Trello)
Task due dates and priorities
User collaboration (shared projects)
Notifications system


**🚧 Challenges & Lessons Learned**

**1. Case Sensitivity Issues in Deployment**

Challenge:
During deployment on Netlify, the build failed due to unresolved imports. While everything worked locally, the production build could not locate files like TaskForm.jsx and TaskList.jsx.

Cause:
This was due to differences between operating systems:

My local environment (macOS) is case-insensitive
Netlify’s environment (Linux) is case-sensitive

File names like taskForm.jsx did not match imports like TaskForm.jsx.

Solution:
I renamed all component files to follow consistent PascalCase naming (e.g., TaskForm.jsx, TaskList.jsx) and ensured imports matched exactly. I also used git mv to properly update file casing in the repository.

What I Learned:

File naming consistency is critical in cross-platform development
Always test builds locally (npm run build) before deploying
Understand differences between development and production environments

**2. Dynamic Routing Conflicts**

Challenge:
I encountered backend errors like:

Cast to ObjectId failed for value "dashboard"

Cause:
My frontend route was defined too broadly:

/:id

This caused routes like /dashboard and /register to be treated as project IDs.

Solution:
I updated my routes to be more specific:

/projects/:id

This ensured only valid project URLs triggered the project page.

What I Learned:

Avoid overly generic routes in React Router
Always design routes with scalability and clarity in mind
Frontend routing mistakes can break backend logic


**3. Passing Incorrect Data in API Requests**

Challenge:
I received errors like:

/projects/[object Object]/tasks

Cause:
I accidentally passed an object instead of a string ID in API calls.

Solution:
I corrected my function parameters to ensure only the project ID string was used when constructing API URLs.

What I Learned:

Be careful with function arguments and data types
Debugging network requests is essential for full-stack apps
Always log values when debugging (console.log)


**4. State Management Issues**

Challenge:
I encountered errors like:

tasks.map is not a function

Cause:
The tasks state was not always an array (sometimes overwritten incorrectly).

Solution:
I ensured:

State is initialized correctly (useState([]))
Updates maintain the correct structure (using arrays, not objects)

What I Learned:

State shape must remain consistent
React errors often come from incorrect state updates
Always validate data before rendering


**5. Git & File Tracking Issues**

Challenge:
Some files worked locally but were missing in deployment.

Cause:
They were not committed or pushed to GitHub.

Solution:
I used:

git add .
git commit
git push

and verified files directly on GitHub.

What I Learned:

Deployment depends on your repository, not your local machine
Always verify files exist in GitHub
Git is a critical skill for real-world development

**🎯 Overall Takeaways**

Through building this project, I gained hands-on experience with:

Full-stack debugging (frontend + backend)
Real-world deployment issues
React architecture and state management
API integration and error handling
Git and version control best practices

This project significantly improved my ability to diagnose and solve complex issues in a production-like environment.

👨‍💻 Author

Sekouba CAMARA

📄 License

This project is open-source and available under the MIT License.

![Dashboard](./frontend/screenshots/dashboard.png)
![Project Page](./frontend/screenshots/project-page.png)
![Login](./frontend/screenshots/login.png)
![Register](./frontend/screenshots/register.png)
