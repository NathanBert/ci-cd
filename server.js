const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).send(task);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
