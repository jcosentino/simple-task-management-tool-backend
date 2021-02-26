import task from '../controllers';

// Task CRUD operations
module.exports = (app) => {
    app.get('/tasks', task.listAllTasks);
    app.get('/task/:id', task.getSingleTask);
    app.post('/task', task.create);
    app.put('/task/:id', task.update);
    app.delete('/task/:id', task.delete);
};
