/* this is primitive type */
let x = 5;
let y = x;
console.log(x,y, 'this is first');
 x = 3;
 console.log(x,y,' this is second');

 /* This is Reference type */
 let user1 = {firtName:'Sameer',lastName:'Verma'}
 let user2 = user1;
console.log('User1= ',user1,'User2= ',user2,' this is first user');
 user1.firtName = 'Harish'
 console.log('User1= ',user1,'User2= ',user2,' this is second user');
