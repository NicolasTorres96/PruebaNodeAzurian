import express = require('express');
import path = require('path');
import bodyParser = require('body-parser')

export class Server{
    public app: express.Application;
    public port: number;

    constructor(port:number){
        this.port = port;
        this.app = express();
    }

    static init (port:number){
        return new Server(port);
    }

    start(){
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))        
        this.app.listen(this.port);
    }
}