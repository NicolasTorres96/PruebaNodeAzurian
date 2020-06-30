"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const bodyParser = require("body-parser");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    static init(port) {
        return new Server(port);
    }
    start() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.listen(this.port);
    }
}
exports.Server = Server;
