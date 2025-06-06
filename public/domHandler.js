import { addTask, deleteTask, updateTask } from './taskManager.js';

let tasks = [];

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
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
            tasks = addTask(tasks, task); // Utiliser la fonction addTask
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <div>
                    <span class="task-color" style="background-color: ${task.color};"></span>
                    ${task.text} (Due: ${task.dueDate})
                </div>
                <button class="delete-button" data-id="${task.id}">Delete</button>
                <button class="edit-button" data-id="${task.id}">Edit</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    // Load tasks from the server
    fetch('/tasks')
        .then(response => response.json())
        .then(fetchedTasks => {
            tasks = fetchedTasks;
            tasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.innerHTML = `
                    <div>
                        <span class="task-color" style="background-color: ${task.color};"></span>
                        ${task.text} (Due: ${task.dueDate})
                    </div>
                    <button class="delete-button" data-id="${task.id}">Delete</button>
                    <button class="edit-button" data-id="${task.id}">Edit</button>
                `;
                taskList.appendChild(taskItem);
            });
        });

    // Handle task deletion
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const taskId = event.target.getAttribute('data-id');
            tasks = deleteTask(tasks, taskId); // Utiliser la fonction deleteTask
            event.target.parentElement.remove();
        }
        if (event.target.classList.contains('edit-button')) {
            const taskId = event.target.getAttribute('data-id');
            const taskToEdit = tasks.find(task => task.id === taskId);
            if (taskToEdit) {
                const newText = prompt('Edit task text:', taskToEdit.text);
                if (newText !== null && newText.trim() !== '') {
                    const updatedTask = { ...taskToEdit, text: newText.trim() };
                    tasks = updateTask(tasks, taskId, updatedTask); // Utiliser la fonction updateTask
                    event.target.parentElement.querySelector('div').innerHTML = `
                        <span class="task-color" style="background-color: ${updatedTask.color};"></span>
                        ${updatedTask.text} (Due: ${updatedTask.dueDate})`;

                    
                }
                else
                {
                    alert('Task text cannot be empty.');
                }
            }
        }
    });
});
