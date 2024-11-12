const taskService = require('../services/taskService');

exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = await taskService.createTask(title, description, status, req.user.userId);
    res.status(201).json({message: "Task created successfully", task:task});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks(req.user.userId);
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = await taskService.updateTask(req.params.id, title, description, status, req.user.userId);
    // res.json(task);
    res.status(201).json({message: "Task updated successfully", task:task});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id, req.user.userId);
    // res.status(204).send();
    res.status(204).json({message: "Task deleted successfully"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
