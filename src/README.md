# Web ToDo List application

## Description ToDo List

This interactive Todo List web app enables users to efficiently manage their tasks. Users can add, remove, and sort
tasks based on various criteria. The app also includes category management with customizable colors and stores data
through an API.

## Features

**Add Tasks**: Users can create new tasks by specifying a title, due date, and category.  
**Remove Tasks**: Tasks can be deleted individually using the delete button or removed all at once with a "clear all"
option.  
**Update Task Status**: Each task's status can be toggled between completed and pending using a checkbox.  
**Edit Task Details**: Users can modify the title and due date by clicking on the task.  
**Task Sorting**: Tasks can be organized by title, due date, or completion status.  
**Category Customization**: Each task can be assigned to a category with a selectable color.

## Installation

#### Clone the project:

```bash
git clone https://github.com/murzikkot978/react-todo-list.git
```

#### Move into the project folder:

```bash
cd react-todo-list
```

#### Install necessary dependencies:

```bash
pnpm install
```

#### Run the development server:

```bash
pnpm dev
```

#### Generate the production build:

```bash
pnpm build
```

#### Preview the production build locally:

```bash
pnpm preview
```

## How to Use

- Open the app in your browser.
- Create a new task by entering a title, selecting a due date, and clicking "Add Task".
- Organize tasks by sorting them based on name, date, or status.
- Toggle task completion using the checkbox.
- Delete tasks individually or remove all at once.
- Define custom categories by entering a category name, choosing a color, and clicking "Add Category".
- Assign a category to any task.

## Technologies I Used

- **CSS**: For styling and layout.
- **React**: Handles the application's logic.
    - `useState`: Enables automatic updates when state changes.
    - **Zustand**: Manages global state across components.
- **Swagger API**: External server used to store all task data.  
