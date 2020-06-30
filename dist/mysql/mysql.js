"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySql {
    constructor() {
        this.con = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '1234',
            database: 'azurian_users'
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static execQuery(query, callback) {
        this.instance.con.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return callback(err);
            }
            if (results.length > 0) {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.con.connect((err) => {
            if (err) {
                console.log(err);
            }
        });
    }
}
exports.default = MySql;
