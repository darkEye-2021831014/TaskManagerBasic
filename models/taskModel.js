let tasks = [];
let currentId = 1;

function createTask(title, description, status) {
    const newTask = {
        id: currentId++,
        title,
        description: description || "",
        status: status || "To Do",
    };
    tasks.push(newTask);
    return newTask;
}

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find((t) => t.id === id);
}

function updateTask(id, updates) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return null;

    if (updates.title) task.title = updates.title;
    if (updates.description) task.description = updates.description;
    if (updates.status) task.status = updates.status;

    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;
    return tasks.splice(index, 1)[0];
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};
