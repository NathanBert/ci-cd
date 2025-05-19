const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));






let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).send(task);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(200).send({ message: 'Task deleted' });
});

app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    tasks = tasks.map(task => task.id === taskId ? updatedTask : task);
    res.status(200).send(updatedTask);
});

/*
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/


