import mysql = require('mysql');

export default class MySql{

    private static _instance: MySql;

    con: mysql.Connection;

    constructor(){
        this.con = mysql.createConnection({
            host:'localhost',
            user:'node_user',
            password:'1234',
            database:'azurian_users'
        })

        this.conectarDB();
    }

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    static execQuery(query:string,callback:Function){
        this.instance.con.query(query,(err,results:Object[],fields) =>{
            if (err) {
                console.log(err);
                return callback(err);
            }

            if (results.length > 0) {
                callback(null,results);
            }
        })
    }

    private conectarDB(){
        this.con.connect((err:mysql.MysqlError)=> {
            if (err) {
                console.log(err);
            }
        })
    }
}