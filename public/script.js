document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: task }),
        })
        .then(response => response.json())
        .then(newTask => {
            const taskList = document.getElementById('task-list');
            const taskItem = document.createElement('li');
            taskItem.textContent = newTask.text;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        });
    }
});

// Load tasks from the server
fetch('/tasks')
    .then(response => response.json())
    .then(tasks => {
        const taskList = document.getElementById('task-list');
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.text;
            taskList.appendChild(taskItem);
        });
    });
