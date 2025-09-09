const Task = require("../models/taskModel");

exports.createTask = (req, res) => {
    const { title, description, status } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const task = Task.createTask(title, description, status);
    res.status(201).json(task);
};

exports.getTasks = (req, res) => {
    res.json(Task.getAllTasks());
};

exports.getTask = (req, res) => {
    const task = Task.getTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
};

exports.updateTask = (req, res) => {
    const task = Task.updateTask(parseInt(req.params.id), req.body);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
};

exports.deleteTask = (req, res) => {
    const deletedTask = Task.deleteTask(parseInt(req.params.id));
    if (!deletedTask) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted successfully", task: deletedTask });
};
