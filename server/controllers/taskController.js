const Task = require("../models/Task");


// Create Task
exports.createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            status,
            boardId,
            assignedTo
        } = req.body;

        const task = await Task.create({
            title,
            description,
            status,
            boardId,
            assignedTo
        });

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get All Tasks
exports.getTasks = async (req, res) => {
    try {
        const { boardId } = req.query;

        const filter = {};

        if (boardId) {
            filter.boardId = boardId;
        }

        const tasks = await Task.find(filter);

        res.json(tasks);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get Single Task
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Update Task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};