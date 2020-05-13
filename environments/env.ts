import { ProdEnvironment } from "./dev.env";
import { DevEnvironment } from "./prod.env";


export interface Environment{
    db_url:string
}

export function getEnvironmentVariables(){

    if(process.env.NODE_ENV == 'production'){
         return ProdEnvironment;
    }
    return DevEnvironment;
}