const { deleteTask } = require('../public/taskManager.js');


test('deletes a task', () => {
    const tasks = [{ text: 'Task to delete', color: '#ffffff', dueDate: '2023-12-31', id: '1' }];
    const updatedTasks = deleteTask(tasks, '1');
    expect(updatedTasks).not.toContainEqual(expect.objectContaining({ id: '1' }));
});
