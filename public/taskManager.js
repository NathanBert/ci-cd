export function addTask(tasks, task) {
    tasks.push(task);
    return tasks;
}

export function deleteTask(tasks, taskId) {
    return tasks.filter(task => task.id !== taskId);
}

export function updateTask(tasks, taskId, updatedTask) {
    return tasks.map(task => task.id === taskId ? updatedTask : task);
}
