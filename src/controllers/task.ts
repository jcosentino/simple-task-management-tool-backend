const Task = require('../models').Task;

module.exports = {
    create(req, res){
        return Task.create({
            name: req.body.name,
            dueDate: req.body.dueDate,
            status: req.body.status
        })
        .then(task => res.status(201).send(task))
        .catch(error => res.status(400).send(error));
    }
};
