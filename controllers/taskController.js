const Task = require('../models/taskModel');

// Validation helper
function validateTask(task) {
    if (!task.title || typeof task.title !== 'string') {
        return 'Title is required and must be a string';
    }
    if (task.status && !['To Do', 'In Progress', 'Completed'].includes(task.status)) {
        return 'Status must be "To Do", "In Progress" or "Completed"';
    }
    return null;
}

// Create task
function createTask(req, res, next) {
    const error = validateTask(req.body);
    if (error) return res.status(400).json({ error });

    const newTask = Task.createTask(req.body);
    res.status(201).json(newTask);
}

// Get all tasks (with search, filter, sort)
function getTasks(req, res, next) {
    let tasks = Task.getAllTasks();

    // Search
    if (req.query.search) {
        const searchTerm = req.query.search.toLowerCase();
        tasks = tasks.filter(t =>
            t.title.toLowerCase().includes(searchTerm) ||
            t.description.toLowerCase().includes(searchTerm)
        );
    }

    // Filter by status
    if (req.query.status) {
        tasks = tasks.filter(t => t.status === req.query.status);
    }

    // Sort
    if (req.query.sortBy) {
        const sortBy = req.query.sortBy;
        tasks.sort((a, b) => {
            if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
                return a[sortBy] - b[sortBy]; // numeric sort
            }
            return String(a[sortBy]).localeCompare(String(b[sortBy])); // string sort
        });
    }


    res.json(tasks);
}

// Get single task
function getTask(req, res, next) {
    const task = Task.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
}

// Update task
function updateTask(req, res, next) {
    const task = Task.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    const error = validateTask(req.body);
    if (error) return res.status(400).json({ error });

    const updatedTask = Task.updateTask(req.params.id, req.body);
    res.json(updatedTask);
}

// Delete task
function deleteTask(req, res, next) {
    const deletedTask = Task.deleteTask(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted', task: deletedTask });
}

// Mark as completed
function completeTask(req, res, next) {
    const task = Task.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    const updatedTask = Task.updateTask(req.params.id, { status: 'Completed' });
    res.json(updatedTask);
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    completeTask
};
