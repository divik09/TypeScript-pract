import * as express from 'express';
import { getEnvironmentVariables } from './environments/env';
import { mongo } from 'mongoose';

export class Server{

    public app:express.Application = express();
    constructor(){
        this.setConfigurations();
        this.setRoutes();
    }
    setConfigurations(){
       this.setMongodb();
    }
    setMongodb(){
        
        const databaseUrl= getEnvironmentVariables().db_url;
        mongo.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
            console.log('MongoDB is Connected');
        })
    }
    setRoutes(){

    }
}