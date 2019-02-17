import CompanyDAO from "../DAO/models/Company";
import taskRouter from "./Task";

const express = require('express');
const router = express.Router();

let companyRouter = router.get('/getById', function (req, res) {
    let data = req.query;
    let {id} = data;
    CompanyDAO.getById(id).then((task) => {
        res.status(200).json(task);
    }).catch(error => res.status(400).json(error))
})
    .get('/getAll', function (req, res) {
        CompanyDAO.getAll().then((tasks) => {
            res.status(200).json(tasks);
        }).catch(error => res.status(400).json(error))
    })
    .post('/add', function (req, res) {
        let data = req.body;

        CompanyDAO.add(data).then((response) => {
            res.status(200).json(response);
        }).catch(error => res.status(400).json(error))
    })
    .post('/update', function (req, res) {
        let data = req.body;
        CompanyDAO.update(data).then(response => {
            res.status(200).json(response);
        }).catch(error => res.status(400).json(error))
    })
    .get('/delete', function (req, res) {
        let data = req.query;
        let {id} = data;
        CompanyDAO.delete(id).then((task) => {
            res.status(200).json(task);
        }).catch(error => res.status(400).json(error))
    });


export default companyRouter;
