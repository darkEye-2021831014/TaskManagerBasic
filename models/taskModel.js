// In-memory storage for tasks with integer IDs
let currentId = 1;
let tasks = [];

// Get all tasks
function getAllTasks() {
    return tasks;
}

// Get task by ID
function getTaskById(id) {
    return tasks.find(task => task.id === parseInt(id));
}

// Create a new task
function createTask({ title, description, status }) {
    const task = {
        id: currentId++,
        title,
        description: description || '',
        status: status || 'To Do'
    };
    tasks.push(task);
    return task;
}

// Update a task
function updateTask(id, { title, description, status }) {
    const task = getTaskById(id);
    if (!task) return null;
    task.title = title !== undefined ? title : task.title;
    task.description = description !== undefined ? description : task.description;
    task.status = status !== undefined ? status : task.status;
    return task;
}

// Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) return null;
    return tasks.splice(index, 1)[0];
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
