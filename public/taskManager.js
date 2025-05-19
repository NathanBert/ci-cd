function addTask(tasks, task) {
    tasks.push(task);
    return tasks;
}

function deleteTask(tasks, taskId) {
    return tasks.filter(task => task.id !== taskId);
}

function updateTask(tasks, taskId, updatedTask) {
    return tasks.map(task => task.id === taskId ? updatedTask : task);
}


module.exports = {
    addTask,
    updateTask,
    deleteTask
  };