const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    last_name: String,
    first_name: String
});

export const User = mongoose.model('User', userSchema);

interface IUser {
    _id?: string;
    last_name: string;
    first_name: string;
}

export default class UserDAO {
    static getById(id: string) {
        return User.findById(id).then((response) => {
            return response;
        }).catch(error => error)
    }

    static getAll() {
        return User.find().then((response) => {
            return response;
        }).catch(error => error)
    }

    static delete(id: string) {
        return User.findByIdAndRemove(id).then((response) => {
            return response;
        }).catch(error => error)
    }

    static update(obj: IUser) {
        return User.findByIdAndUpdate(obj._id, obj, {new: true})
            .then(response => {
                return response;
            }).catch(error => error)
    }

    static add(obj: IUser) {
        return new User(obj).save().then((response) => {
            return response;
        }).catch(error => error)
    }
}