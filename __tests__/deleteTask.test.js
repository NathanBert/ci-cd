const { addTask } = require('../public/script');

test('deletes a task', () => {
    const tasks = [{ text: 'Task to delete', color: '#ffffff', dueDate: '2023-12-31', id: '1' }];
    deleteTask(tasks, '1');
    expect(tasks).not.toContainEqual(expect.objectContaining({ id: '1' }));
});
