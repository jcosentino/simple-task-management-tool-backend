import db from '../models';
const Task = db.Task;

module.exports = {
    listAllTasks(req: any, res: any){
        return Task.findAll()
                   .then((tasks: any) => res.status(200).send(tasks))
                   .catch((error: any) => res.status(400).send(error));
    },
    getSingleTask(req: any, res: any){
        return Task.findByPk(req.params.id)
                   .then((task: any) => {
                       if(!task){
                           return res.status(404).send('Task was not found!');
                        }
                        return res.status(200).send(task);
                   })
                   .catch((error: any) => res.status(400).send(error));
    },
    create(req: any, res: any){
        return Task.create({
            name: req.body.name,
            description: req.body.description,
            dueDateMonth: req.body.dueDateMonth,
            dueDateDay: req.body.dueDateDay,
            dueDateYear: req.body.dueDateYear,
            status: req.body.status
        })
        .then((task: any) => res.status(201).send(task))
        .catch((error: any) => res.status(400).send(error));
    },
    update(req: any, res: any){
        return Task.findByPk(req.params.id)
                   .then((task: { update: (arg0: { name: any; description: any; dueDateMonth: any; dueDateDay: any; dueDateYear: any; status: any; }) => Promise<any>; name: any; description: any; dueDateMonth: any; dueDateDay: any; dueDateYear: any; status: any; }) => {
                       if(!task){
                           return res.status(404).send('Task not found!');
                        }
                        return task.update({
                            name: req.body.name || task.name,
                            description: req.body.description || task.description,
                            dueDateMonth: req.body.dueDateMonth || task.dueDateMonth,
                            dueDateDay: req.body.dueDateDay || task.dueDateDay,
                            dueDateYear: req.body.dueDateYear || task.dueDateYear,
                            status: req.body.status || task.status
                        })
                        .then(() => res.status(200).send(task))
                        .catch((error: any) => res.status(400).send(error));
                    });
    },
    delete(req: any, res: any){
        return Task.findByPk(req.params.id)
                   .then((task: { destroy: () => Promise<any>; }) => {
                       if(!task){
                           return res.status(400).send('Unable to delete, task does not exist!');
                       }
                       return task.destroy()
                                  .then(() => res.status(204).send())
                                  .catch((error: any) => res.status(400).send(error));
                   });
    }
};
