import TaskDAO from "../DAO/models/Task";

const express = require('express');
const router = express.Router();

let taskRouter = router.get('/getById', function (req, res) {
    let data = req.query;
    let {id} = data;
    TaskDAO.getById(id).then((task) => {
        res.status(200).json(task);
    }).catch(error => res.status(400).json(error))
})
    .get('/getAll', function (req, res) {
        TaskDAO.getAll().then((tasks) => {
            res.status(200).json(tasks);
        }).catch(error => res.status(400).json(error))
    })
    .post('/add', function (req, res) {
        let data = req.body;

        TaskDAO.add(data).then((response) => {
            res.status(200).json(response);
        }).catch(error => res.status(400).json(error))
    })
    .post('/update', function (req, res) {
        let data = req.body;
        TaskDAO.update(data).then(response => {
            res.status(200).json(response);
        }).catch(error => res.status(400).json(error))
    })
    .get('/delete', function (req, res) {
        let data = req.query;
        let {id} = data;
        TaskDAO.delete(id).then((task) => {
            res.status(200).json(task);
        }).catch(error => res.status(400).json(error))
    });


export default taskRouter;
