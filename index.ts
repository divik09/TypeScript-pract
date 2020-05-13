import * as express from 'express';
import { Mongoose, mongo } from 'mongoose';
import { getEnvironmentVariables } from './environments/env';
let app:express.Application = express();
//user middle wari
app.use((req,res,next)=>{
    // res.append('Access-Control-Allow-Origin', ['*']);
    // res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
     console.log("middle ware called")
     
})


app.get('/login',(req:any,res,next)=>{
    res.setHeader('content-type','Application/json')
    const name={
        "firstname":"Divik",
        "lastname":"Tiwari"
    }
    //res.json({firstname:"dev",lastname:"tripathi"})
    req.user = name;
    res.status(200  ).send(req.user);
    

})

app.get('/signup',(req:any,res)=>{
   
    const data =[{name:'testName'}]
    req.user = data;
    res.status(200).send(req.user)
})


app.listen(5000,()=>{
console.log('Server started at 5000')
})