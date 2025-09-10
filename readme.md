# 📝 Task Manager CRUD App (Node.js + Express)

A simple **Task Manager** backend built with **Node.js** and **Express.js** that allows users to manage tasks with full CRUD (Create, Read, Update, Delete) functionality.  
Tasks are stored **in-memory** (array), so no database is required.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/darkEye-2021831014/TaskManagerBasic.git
cd TaskManagerBasic
```

### 2. Run Backend Server

```bash
npm run dev
```

## 3. API Endpoints

```bash
GET -> http://localhost:3000/tasks/
GET -> http://localhost:3000/tasks/1
GET -> http://localhost:3000/tasks/?sortBy=title
GET -> http://localhost:3000/tasks/?search=task
GET -> http://localhost:3000/tasks/?status=To Do
GET -> http://localhost:3000/tasks/?sortBy=status
POST -> http://localhost:3000/tasks/
PUT -> http://localhost:3000/tasks/1
DELETE -> http://localhost:3000/tasks/1
PATCH -> http://localhost:3000/tasks/1/complete
```
