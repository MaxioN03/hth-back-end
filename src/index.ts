import * as bodyParser from "body-parser";
import * as express from "express";
import {Request, Response} from "express";
import * as http from 'http';
import UserDAO from "./DAO/models/User";

console.log('UserDAO start',UserDAO);

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let mongoose = require('mongoose');
let dbUrl = 'mongodb://maxion:maxionhth123@ds137605.mlab.com:37605/hth-db';
mongoose.connect(dbUrl);

let db = mongoose.connection;
db.on('error', err => {
    console.log('error', err)
});
db.once('open', () => {
    console.log('MongoDB connected')

    console.log(UserDAO.create({first_name: 'Yahor', last_name: 'Kutz'}));
});

const mockData = {
    a: 1, b: 2, c: 3
};

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({status: "ok"});
});

app.get('/test', (req: Request, res: Response) => {
    let userExample = UserDAO.create({first_name: 'Yahor', last_name: 'Kutz'})
    res.status(200).json(userExample);
});


let httpPort = process.env.PORT || 9000;
app.set("port", httpPort);
let httpServer = http.createServer(app);

//listen on provided ports
httpServer.listen(httpPort, (data) => {
    console.log(`Listening on port ${httpPort}`)
});