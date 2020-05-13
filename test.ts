let st = 'helo';
    st = 'ds';

    const cs:number = 4;

var sts = 4;
 var se = sts;  

let div:any= 4;
  div = {};
  div = 'str'
  div=true;

 const ds:object= {firstName:"hello",lastName:"boro"}
 
 const as:Array<any>=['same','div',4,true];
 const asString:Array<string>=['same','div'];
 const obj:Array<object> = [{firstName:"hello",lastName:"boro"},{firstName:"hello",lastName:"boro"}]

 const test:null = undefined;
 const testing:undefined = undefined;
 let vo:void
 
 /* This is Tupple */
 const myArray:[string,boolean,number,object] = ['',true,4,{}];

 const enum direct{
    one = 5,
    two = 1,
 }

 

 function show(key:number,test?:number){

    if(key == direct.one){
       console.log('This is number= ',key);
       return key;
    }
    if(key == direct.two){
      console.log('This is number= ',key);
      return key;
    }
      return 78;
 }
 const i:number = show(52);

 console.log('the returned result is= ',i);

 const person:User = {firstName:'Hari',lastName:'prasad',verified:'bhai'}



 interface User{
     firstName:string,
     lastName:string,
     verified:string,

 }

 
