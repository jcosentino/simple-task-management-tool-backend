const taskController = require('../controllers').task;

module.exports = (app) => {
    app.get('/tasks', (req, res) => {
        res.status(200).send({
            message: 'There should be tasks listed!'
        });
    });
    app.post('/task', taskController.create);
};
