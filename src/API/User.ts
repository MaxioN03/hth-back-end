import UserDAO from "../DAO/models/User";

const express = require('express');
const router = express.Router();

let userRouter = router.get('/getById', function (req, res) {
    let data = req.query;
    let {id} = data;
    UserDAO.getById(id).then((user) => {
        res.status(200).json(user);
    }).catch(error => res.status(400).json(error))
})
    .get('/getAll', function (req, res) {
        UserDAO.getAll().then((users) => {
            res.status(200).json(users);
        }).catch(error => res.status(400).json(error))
    })
    .post('/add', function (req, res) {
        let data = req.body;

        UserDAO.add(data).then((response) => {
            res.status(200).json(response);
        }).catch(error => res.status(400).json(error))
    })
    .post('/update', function (req, res) {
        let data = req.body;
        UserDAO.update(data).then(response => {
            res.status(200).json(response);
        }).catch(error => res.status(400).json(error))
    })
    .get('/delete', function (req, res) {
        let data = req.query;
        let {id} = data;
        UserDAO.delete(id).then((user) => {
            res.status(200).json(user);
        }).catch(error => res.status(400).json(error))
    });


export default userRouter;
