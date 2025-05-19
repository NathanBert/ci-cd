const { addTask } = require('../public/script');

test('updates a task', () => {
    const tasks = [{ text: 'Task to update', color: '#ffffff', dueDate: '2023-12-31', id: '1' }];
    const updatedTask = { text: 'Updated Task', color: '#ffffff', dueDate: '2023-12-31', id: '1' };
    updateTask(tasks, '1', updatedTask);
    expect(tasks).toContainEqual(updatedTask);
});
