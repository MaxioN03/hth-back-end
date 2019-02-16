const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user_name: String,
    name: String,
    description: String
});

export const Task = mongoose.model('Task', taskSchema);

interface ITask {
    _id?: string;
    user_name: string;
    name: string;
    description: string;
}

export default class TaskDAO {
    static getById(id: string) {
        return Task.findById(id).then((response) => {
            return response;
        }).catch(error => error)
    }

    static getAll() {
        return Task.find().then((response) => {
            return response;
        }).catch(error => error)
    }

    static delete(id: string) {
        return Task.findByIdAndRemove(id).then((response) => {
            return response;
        }).catch(error => error)
    }

    static update(obj: ITask) {
        return Task.findByIdAndUpdate(obj._id, obj, {new: true})
            .then(response => {
                return response;
            }).catch(error => error)
    }

    static add(obj: ITask) {
        return new Task(obj).save().then((response) => {
            return response;
        }).catch(error => error)
    }
}