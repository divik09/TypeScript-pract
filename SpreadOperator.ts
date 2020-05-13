let object1 = {firstName:'Dev',lastName:'tiwari'};
let object2 = {...object1,lastName:'tripathi',address:'Indore'}
console.log(object1);
console.log(object2);

let array1 = [12,21,32,23123,33];
let array2= [...array1,12,3,5,42,3,object1];
console.log(array2);
