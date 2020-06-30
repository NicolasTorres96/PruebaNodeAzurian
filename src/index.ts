import { Server } from './server/server';
import router from './router/router';
import MySql from './mysql/mysql';
import bodyParser from 'body-parser';

const server = Server.init(3000);
server.start();
MySql.instance;
server.app.use(router)

