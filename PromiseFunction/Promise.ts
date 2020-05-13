


function isBreadAvail(){
      return false;
}
function isEggAvail(){
    return false;
}

function BringBreadOrEgg(){

    return new Promise((resolve,reject)=>{
    
          if(isBreadAvail()){
              resolve('Got Bread');
          }
         else if(isEggAvail()){
            resolve('Got Egg');
          }else{
              reject('not Got Egg or Bread')
          }
    })
}

/* BringBreadOrEgg().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
}) */

async function tryShop(){

    const mydata = await BringBreadOrEgg();
    console.log(mydata,' this On TryShop function');
  return mydata;
      
}  

tryShop().then(data=>{
    console.log(data);
}).catch(e=>{
      console.log(e)
})