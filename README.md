# 🚀 CollabBoard

### Collaborative Project Management & Task Tracking Platform

CollabBoard is a modern collaborative project management and task tracking web application designed to help teams organize projects, manage tasks, track progress, and collaborate efficiently.

The project is developed using **React + Vite** and follows a modular component-based architecture to make the application scalable, maintainable, and easy for a development team to work on collaboratively.

---

## 🌐 Live Demo

The latest front-end version of CollabBoard is deployed on Vercel.

👉 **Live Demo:**
https://collabboard-rosy.vercel.app/

---

## 📌 Project Overview

CollabBoard is designed to provide teams with a centralized platform for managing projects and tasks.

The application provides an intuitive interface for:

* Managing project boards
* Creating and managing tasks
* Organizing tasks by columns
* Tracking task status and priority
* Viewing project statistics
* Navigating between application pages
* Managing user authentication interfaces
* Customizing the application experience

The current version focuses on the **Static Front-End Skeleton** and establishes the main user interface, reusable components, application structure, and front-end services required for future backend integration.

---

# ✨ Features

## 🔐 Authentication

* Login interface
* Registration interface
* Authentication context
* Protected application structure
* Front-end authentication handling

## 🏠 Pages

* Home page
* Dashboard
* Profile
* Settings
* 404 Not Found page

## 📋 Project Board

* Project board interface
* Task columns
* Task cards
* Add task modal
* Task status management
* Task priority management
* Task search
* Task editing
* Task deletion

## 📊 Statistics

* Task statistics
* Project progress information
* Reusable statistics cards

## 🎨 User Interface

* Responsive design
* Modern dashboard layout
* Navigation bar
* Reusable UI components
* Custom global styling
* Dark mode support

## 💾 Client-Side Features

* Local cache support
* Local storage functionality
* Front-end state management
* Conflict resolution utility

## 🔌 Services & Integration

The project includes service modules prepared for future backend API integration:

* Authentication service
* Board service
* Task service
* Axios API configuration
* Socket connection hook

---

# 🛠️ Technologies Used

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| ⚛️ React          | Front-end application development |
| ⚡ Vite            | Development server and build tool |
| 🟨 JavaScript     | Application logic                 |
| 🎨 CSS            | Custom styling                    |
| 🅱️ Bootstrap     | Responsive UI components          |
| 🧭 React Router   | Client-side navigation            |
| 💾 Local Storage  | Client-side data persistence      |
| 🔗 Axios          | API communication                 |
| 🔄 Socket Support | Future real-time communication    |
| 🔧 Git            | Version control                   |
| 🐙 GitHub         | Repository and collaboration      |
| ▲ Vercel          | Deployment                        |

---

# 📂 Project Structure

The CollabBoard front-end follows a modular and component-based folder structure.

```text
collabboard-client/
│
├── node_modules/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   │
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── Board/
│   │   │   ├── AddTaskModal.jsx
│   │   │   ├── Board.css
│   │   │   └── Board.jsx
│   │   │
│   │   ├── Column/
│   │   │   ├── Column.css
│   │   │   └── Column.jsx
│   │   │
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── Stats/
│   │   │   └── StatsCard.jsx
│   │   │
│   │   └── TaskCard/
│   │       ├── TaskCard.css
│   │       └── TaskCard.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useLocalCache.js
│   │   └── useSocket.js
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── boardService.js
│   │   └── taskService.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   └── conflictResolver.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

> **Note:** `node_modules/` is required locally for dependencies but is excluded from GitHub using `.gitignore`.

---

# 🧩 Folder & Component Description

## `src/components/`

Contains reusable UI components used throughout the application.

### `Auth/`

Responsible for authentication-related user interfaces.

* `Login.jsx` — Login interface
* `Register.jsx` — Registration interface

### `Board/`

Contains the main project board functionality.

* `Board.jsx` — Main task board
* `Board.css` — Board styling
* `AddTaskModal.jsx` — Modal for creating tasks

### `Column/`

Handles task column presentation.

* `Column.jsx` — Displays tasks grouped by status
* `Column.css` — Column styling

### `Layout/`

Contains the common application layout.

* `Layout.jsx` — Main page layout
* `Navbar.jsx` — Navigation bar

### `Stats/`

Contains reusable statistics components.

* `StatsCard.jsx` — Displays project/task statistics

### `TaskCard/`

Contains individual task card components.

* `TaskCard.jsx` — Task information and actions
* `TaskCard.css` — Task card styling

---

# 🧠 Context

The `context/` directory contains React Context functionality.

### `AuthContext.jsx`

Manages authentication-related state and provides authentication information throughout the application.

---

# 🪝 Hooks

The `hooks/` directory contains reusable custom React hooks.

### `useLocalCache.js`

Provides functionality for storing and retrieving client-side cached data.

### `useSocket.js`

Provides the foundation for future real-time communication using socket connections.

---

# 📄 Pages

The `pages/` directory contains the application's main pages.

### `Dashboard.jsx`

Main dashboard interface for viewing project information and task statistics.

### `Home.jsx`

Landing/home page of the application.

### `NotFound.jsx`

Displays a 404 page when a requested route does not exist.

### `Profile.jsx`

User profile interface.

### `Settings.jsx`

Application settings interface.

---

# 🔌 Services

The `services/` directory contains modules responsible for communication with backend APIs.

### `api.js`

Central API configuration and HTTP communication setup.

### `authService.js`

Handles authentication-related API operations.

### `boardService.js`

Handles project board-related API operations.

### `taskService.js`

Handles task-related API operations.

This structure allows the front-end to be easily connected to a backend API in future development.

---

# 🎨 Styles

The `styles/` directory contains global styling.

### `global.css`

Contains application-wide styles, layout rules, themes, responsive styles, and common UI styling.

---

# 🛠️ Utilities

The `utils/` directory contains reusable helper functions.

### `conflictResolver.js`

Provides functionality for handling potential data conflicts, especially for future collaborative and real-time features.

---

# 🔐 Login Credentials

For testing the current **Static Front-End Skeleton**, users can log in using **any email address and password**.

### Example

**Email:**

```text
student@gmail.com
```

**Password:**

```text
123456
```

> **Note:** No specific demo account is required for the current static front-end version. Any valid email address and password can be entered to test the login interface.

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/prabash0929/CollabBoard.git
```

## 2. Navigate to the Client Directory

```bash
cd CollabBoard/collabboard-client
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a local URL.

---

# 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

# 🌿 Git Branching Strategy

CollabBoard uses a feature-based Git workflow to support team collaboration.

The main branch is the default and stable branch.

```text
main
│
├── ui-development
├── feature-setup
├── feature/pages
└── feature/<new-feature>
```

## `main`

The `main` branch contains the stable and reviewed version of the project.

## Feature Branches

Each new feature should be developed using a separate branch.

Example:

```bash
git switch main
git pull origin main
git switch -c feature/task-management
```

---

# 🔄 Git Development Workflow

### Step 1 — Switch to Main

```bash
git switch main
```

### Step 2 — Get Latest Changes

```bash
git pull origin main
```

### Step 3 — Create a Feature Branch

```bash
git switch -c feature/your-feature-name
```

### Step 4 — Develop the Feature

Make the required code changes.

### Step 5 — Stage Changes

```bash
git add .
```

### Step 6 — Commit Changes

```bash
git commit -m "Add new feature"
```

### Step 7 — Push the Branch

```bash
git push -u origin feature/your-feature-name
```

### Step 8 — Create Pull Request

Create a Pull Request from:

```text
feature/your-feature-name
            ↓
           main
```

After reviewing the changes, merge the Pull Request into `main`.

---

# 🧪 Testing

The current release is focused on the Static Front-End Skeleton.

The following areas can be tested:

* Login interface
* Registration interface
* Navigation
* Home page
* Dashboard
* Profile page
* Settings page
* Project board
* Task columns
* Task cards
* Add task modal
* Task status
* Task priority
* Task search
* Dark mode
* Responsive layout
* Local storage
* Front-end interactions

---

# 🔮 Future Improvements

## 🔐 Authentication

* Real user registration
* Real login authentication
* JWT-based authentication
* Password security
* Role-based access control
* Protected routes

## 👥 Collaboration

* Team member management
* Real-time collaboration
* Online user presence
* Activity tracking
* Collaborative task editing

## 📋 Task Management

* Drag and drop
* Task assignment
* Due dates
* Task comments
* File attachments
* Advanced task filtering
* Task labels

## 🔔 Notifications

* Task assignment notifications
* Project notifications
* Real-time alerts
* In-app notifications

## 📊 Analytics

* Project progress charts
* Task completion statistics
* Team performance
* Productivity analytics

## 🗄️ Backend

Future backend integration may include:

* Node.js
* Express.js
* MongoDB
* REST API
* JWT authentication
* WebSocket / Socket.IO
* Secure API communication

---

# 👥 Team Collaboration

CollabBoard is developed as a collaborative academic group project.

GitHub is used for:

* Source code management
* Branch management
* Feature development
* Pull Requests
* Code review
* Version control
* Team collaboration

Each team member can develop a feature using a separate branch and submit the completed work through a Pull Request.

---

# 📊 Project Status

### 🚧 Current Status: Static Front-End Skeleton

The project currently contains the main front-end architecture and user interface components.

The following development stages will focus on integrating:

* Backend services
* Database functionality
* Authentication
* Real-time collaboration
* Advanced task management
* Notifications
* Analytics

---

# 🌐 Deployment

The current front-end application is deployed using **Vercel**.

### Live Application

https://collabboard-rosy.vercel.app/

---

# 🔗 Project Links

| Resource             | Link                                              |
| -------------------- | ------------------------------------------------- |
| 🌐 Live Demo         | https://collabboard-rosy.vercel.app/              |
| 💻 GitHub Repository | https://github.com/prabash0929/CollabBoard        |
| 📋 GitHub Issues     | https://github.com/prabash0929/CollabBoard/issues |
| 🔀 Pull Requests     | https://github.com/prabash0929/CollabBoard/pulls  |

---

# 📜 License

This project is developed for **academic and educational purposes**.

---

# 👨‍💻 CollabBoard Team

**CollabBoard**
Collaborative Project Management & Task Tracking Platform

Built with ❤️ using React, Vite, JavaScript, Bootstrap, CSS, Git, GitHub, and Vercel.
