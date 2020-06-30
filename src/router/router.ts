import {Router, Request, Response} from 'express';
import MySql from '../mysql/mysql';
import cors from 'cors';

const router = Router();

router.use(cors());

router.get('/users',(req:Request, res: Response)=>{

    const query = `Select * From users`;
    MySql.execQuery(query,(err:any,users:Object[])=>{
        if (err) {
            res.status(400).json({
                ok:false,
                error:err
            })
        }else{
            res.json({
                ok:true,
                users
            })
        }
    })   
})

router.post('/user',(req:Request, res: Response)=>{
    const query = `INSERT INTO users VALUES (NULL, ${req.body.age}, '${req.body.name}', '${req.body.username}');`;
    MySql.execQuery(query,(err:any,user:Object[])=>{
        if (err) {
            res.status(400).json({
                ok:false,
                error:err
            })
        }else{
            res.json({
                ok:true
            })
        }
    })  
})

router.post('/user/:id',(req:Request, res: Response)=>{
    const id = req.params.id;
    const query = `UPDATE users 
                    set age = ${req.body.age},
                    name = '${req.body.name}',
                    username='${req.body.username}'
                    WHERE id = ${id}`;
    MySql.execQuery(query,(err:any,user:Object[])=>{
        if (err) {
            res.status(400).json({
                ok:false,
                error:err
            })
        }else{
            res.json({
                ok:true
            })
        }
    })  
})

router.delete('/user/:id',(req:Request, res: Response)=>{
    const id = req.params.id;
    const query = `DELETE FROM users WHERE id = ${id}`;
    MySql.execQuery(query,(err:any,user:Object[])=>{
        if (err) {
            res.status(400).json({
                ok:false,
                error:err
            })
        }else{
            res.json({
                ok:true
            })
        }
    })  
})

export default router;