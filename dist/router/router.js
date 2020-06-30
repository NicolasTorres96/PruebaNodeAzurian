"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const cors_1 = __importDefault(require("cors"));
const router = express_1.Router();
router.use(cors_1.default());
router.get('/users', (req, res) => {
    const query = `Select * From users`;
    mysql_1.default.execQuery(query, (err, users) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                users
            });
        }
    });
});
router.post('/user', (req, res) => {
    const query = `INSERT INTO users VALUES (NULL, ${req.body.age}, '${req.body.name}', '${req.body.username}');`;
    mysql_1.default.execQuery(query, (err, user) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true
            });
        }
    });
});
router.post('/user/:id', (req, res) => {
    const id = req.params.id;
    const query = `UPDATE users 
                    set age = ${req.body.age},
                    name = '${req.body.name}',
                    username='${req.body.username}'
                    WHERE id = ${id}`;
    mysql_1.default.execQuery(query, (err, user) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true
            });
        }
    });
});
router.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM users WHERE id = ${id}`;
    mysql_1.default.execQuery(query, (err, user) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true
            });
        }
    });
});
exports.default = router;
