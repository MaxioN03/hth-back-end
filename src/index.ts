import * as bodyParser from "body-parser";
import * as express from "express";
import {Request, Response} from "express";
import * as http from 'http';
import userRouter from './API/User'
import taskRouter from './API/Task'
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
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({status: "ok"});
});
app.use('/user', userRouter);
app.use('/task', taskRouter);


let httpPort = process.env.PORT || 9000;
app.set("port", httpPort);
let httpServer = http.createServer(app);
httpServer.listen(httpPort, () => {
    console.log(`Listening on port ${httpPort}`)
});