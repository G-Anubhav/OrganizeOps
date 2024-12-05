# Task Management Dashboard

## Objective
The goal of this project is to evaluate proficiency in React, Redux, JavaScript, and UI/UX design principles. This task management dashboard allows users to manage tasks (add, edit, delete, and mark as completed) and filter tasks based on their status.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Routes](#routes)
- [State Management](#state-management)
- [Additional Features](#additional-features)
- [License](#license)

## Features

### Task Functionality
- **Add Task:** Users can add tasks with a title, description, and due date.
- **Edit Task:** Users can edit task details.
- **Delete Task:** Users can delete a task.
- **Mark as Completed:** Users can mark tasks as completed.

### Task Filters
- Show tasks by:
  - All Tasks
  - Completed Tasks
  - Pending Tasks
  - Overdue Tasks (tasks with a due date before the current date).

### Redux Integration
- Use Redux for state management.
- Store the list of tasks in the Redux store.
- Create actions and reducers to handle task CRUD operations and filtering.

### UI/UX Design
- Use a modern UI library (like Material-UI, Ant Design, or styled-components) or a custom UI design.
- Create a responsive design that works well on desktop and mobile screens.
- Maintain a clean and user-friendly layout.

### Additional Features (Optional)
- **Search Functionality:** Find tasks by title.
- **Drag-and-Drop:** Reorder tasks.
- **Confirmation Modal:** Confirm before deleting a task.

## Installation

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Instructions

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/G-Anubhav/OrganizeOps.git)
    cd OrganizeOps
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Use the dashboard to add, edit, delete, and manage tasks.
3. Use the filters to view tasks by their status.
4. Optionally, use the search bar to find tasks by title, drag-and-drop tasks to reorder them, and confirm before deleting a task.

## Tech Stack
- **React**
- **Redux** (with @reduxjs/toolkit preferred)
- **JavaScript** (ES6+ features)
- **CSS or SCSS** (optional: CSS-in-JS libraries like styled-components)

## Routes
- `/tasks` - Task Dashboard
- `/tasks/:id` - Task Details Page (optional)

## State Management
- **Redux Toolkit:** Handle state and actions.
- **Middleware:** Use Redux Thunk for asynchronous operations, if needed.

## Additional Features (Optional)
- Add search functionality to find tasks by title.
- Implement drag-and-drop to reorder tasks.
- Add a confirmation modal before deleting a task.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
