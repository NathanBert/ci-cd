const { updateTask } = require('../public/taskManager');

test('updates a task', () => {
    const tasks = [{ text: 'Task to update', color: '#ffffff', dueDate: '2023-12-31', id: '1' }];
    const updatedTask = { text: 'Updated Task', color: '#ffffff', dueDate: '2023-12-31', id: '1' };
    const updatedTasks = updateTask(tasks, '1', updatedTask);
    expect(updatedTasks).toContainEqual(updatedTask);
});
