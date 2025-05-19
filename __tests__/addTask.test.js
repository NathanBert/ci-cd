const { addTask } = require('../public/taskManager.js');

test('adds a new task', () => {
    const tasks = [];
    const newTask = { text: 'New Task', color: '#ffffff', dueDate: '2023-12-31', id: '1' };
    const updatedTasks = addTask(tasks, newTask);
    expect(updatedTasks).toContainEqual(newTask);
});
