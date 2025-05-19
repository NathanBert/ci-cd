const { addTask } = require('./script');

test('adds a new task', () => {
    const tasks = [];
    const newTask = { text: 'New Task', color: '#ffffff', dueDate: '2023-12-31', id: '1' };
    addTask(tasks, newTask);
    expect(tasks).toContainEqual(newTask);
});
