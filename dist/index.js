"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const router_1 = __importDefault(require("./router/router"));
const mysql_1 = __importDefault(require("./mysql/mysql"));
const server = server_1.Server.init(3000);
server.start();
mysql_1.default.instance;
server.app.use(router_1.default);
