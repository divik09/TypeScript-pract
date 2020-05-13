import { Z_BEST_SPEED } from "zlib";

class Animal{
    name;
  static living:boolean=true;
   static status():boolean{
      console.log('Moving somewhere in jungle');
      return true;
   } 

    constructor(name){
       this.name = name;
      
    }
    speak(){
     return 'General';
    }
    

     move(speed,ds?):string{
         console.log('Animal '+speed+'speed');
        return speed+' '+ds;

    }
    
}

 class Dog extends Animal{
      name
    constructor(name){
        super(name)
        super.move(name)
    }

    speak(){
        return 'bark';
    }
   
   move(speed,ss){
       console.log(ss+' running with speed of'+speed)
      this.behaviour();
      
       return speed+' '+ss;

   }
   behaviour(){
        console.log('Dog barks');
    }
  
    
}
interface Creature{

}
interface ZooAnimal{

}



class Cat extends Animal implements Creature,ZooAnimal{
   name;
   
      speak(){
          return 'meaow';
      }
    constructor(name){
      super(name);        
    }
    
         
}

const animDog = new Dog('monty');
const animCat = new Cat('misty');
animDog.behaviour();
animDog.move(5,'monty');
Dog.living;
const as = animDog.speak()
console.log(as);
console.log(new Animal('creature').speak());



