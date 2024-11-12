const Task = require('../models/Task');

exports.createTask = async (title, description, status, userId) => {
  return await Task.create({ title, description, status, userId });
};

exports.getTasks = async (userId) => {
  return await Task.findAll({ where: { userId } });
};

exports.updateTask = async (id, title, description, status, userId) => {
  const task = await Task.findOne({ where: { id, userId } });
  if (!task) throw new Error('Task not found');
  return await task.update({ title, description, status });
};

exports.deleteTask = async (id, userId) => {
  const task = await Task.findOne({ where: { id, userId } });
  if (!task) throw new Error('Task not found');
  return await task.destroy();
};
