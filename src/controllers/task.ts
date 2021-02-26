import db from '../models';
const Task = db.Task;

module.exports = {
    listAllTasks(req: any, res: any){
        return Task.findAll()
                   .then(tasks => res.status(200).send(tasks))
                   .catch(error => res.status(400).send(error));
    },
    getSingleTask(req: any, res: any){
        return Task.findByPk(req.params.id)
                   .then(task => {
                       if(!task){
                           return res.status(404).send('Task was not found!');
                        }
                        return res.status(200).send(task);
                   })
                   .catch(error => res.status(400).send(error));
    },
    create(req: any, res: any){
        return Task.create({
            name: req.body.name,
            description: req.body.description,
            dueDate: req.body.dueDate,
            status: req.body.status
        })
        .then((task: any) => res.status(201).send(task))
        .catch((error: any) => res.status(400).send(error));
    },
    update(req: any, res: any){
        return Task.findByPk(req.params.id)
                   .then(task => {
                       if(!task){
                           return res.status(404).send('Task not found!');
                        }
                        return task.update({
                            name: req.body.name || task.name,
                            description: req.body.description || task.description,
                            dueDate: req.body.dueDate || task.dueDate,
                            status: req.body.status || task.status
                        })
                        .then(() => res.status(200).send(task))
                        .catch((error: any) => res.status(400).send(error));
                    });
    },
    delete(req: any, res: any){
        return Task.findByPk(req.params.id)
                   .then(task => {
                       if(!task){
                           return res.status(400).send('Unable to delete, task does not exist!');
                       }
                       return task.destroy()
                                  .then(() => res.status(204).send())
                                  .catch(error => res.status(400).send(error));
                   });
    }
};
