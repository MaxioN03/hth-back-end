const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    company_name: String,
    category: String,
    project_name: String,
    date: Date,
    city: String,
    require: String,
    description: String,
    number_of_participants: Number
});

export const Company = mongoose.model('Company', companySchema);

interface ICompany {
    _id?: string;
    company_name: string;
    category: string;
    project_name: string;
    date: number,
    city: string,
    require: string,
    description: string
    number_of_participants: number
}

export default class CompanyDAO {
    static getById(id: string) {
        return Company.findById(id).then((response) => {
            return response;
        }).catch(error => error)
    }

    static getAll() {
        return Company.find().then((response) => {
            return response;
        }).catch(error => error)
    }

    static delete(id: string) {
        return Company.findByIdAndRemove(id).then((response) => {
            return response;
        }).catch(error => error)
    }

    static update(obj: ICompany) {
        return Company.findByIdAndUpdate(obj._id, obj, {new: true})
            .then(response => {
                return response;
            }).catch(error => error)
    }

    static add(obj: ICompany) {
        return new Company(obj).save().then((response) => {
            return response;
        }).catch(error => error)
    }
}