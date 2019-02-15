import * as bodyParser from "body-parser";
import * as express from "express";
import {Request, Response} from "express";
import * as http from 'http';

const app: express.Application = express();

const mockData = {
    a: 1, b: 2
}

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({status: "ok"});
});

app.get('/test', (req: Request, res: Response) => {
    res.status(200).json(mockData);
});


let httpPort = process.env.PORT || 9000;
app.set("port", httpPort);
let httpServer = http.createServer(app);

//listen on provided ports
httpServer.listen(httpPort, (data) => {
    console.log(`Listening on port ${httpPort}`)
});