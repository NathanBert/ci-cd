document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskColor = document.getElementById('task-color');
    const taskDueDate = document.getElementById('task-due-date');
    const task = {
        text: taskInput.value.trim(),
        color: taskColor.value,
        dueDate: taskDueDate.value,
        id: Date.now().toString()
    };

    if (task.text) {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        .then(response => response.json())
        .then(newTask => {
            const taskList = document.getElementById('task-list');
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <div>
                    <span class="task-color" style="background-color: ${newTask.color};"></span>
                    ${newTask.text} (Due: ${newTask.dueDate})
                </div>
                <button class="delete-button" data-id="${newTask.id}">Delete</button>
            `;
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
            taskItem.innerHTML = `
                <div>
                    <span class="task-color" style="background-color: ${task.color};"></span>
                    ${task.text} (Due: ${task.dueDate})
                </div>
                <button class="delete-button" data-id="${task.id}">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    });

// Handle task deletion
document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const taskId = event.target.getAttribute('data-id');
        fetch(`/tasks/${taskId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(() => {
            event.target.parentElement.remove();
        });
    }
});









