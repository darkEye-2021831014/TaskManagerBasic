const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Server start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const errorHandler = require("./utils/errorHandler");
app.use(errorHandler);

