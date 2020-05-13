
export class Action{
private ammo = 10;
protected readonly name;

constructor(name:string){
   this.name = name;
}
        shoot(){
            this.ammo = this.ammo-1;
            console.log(this.name+' is Shooting '+ this.ammo+' ammo');
        }
}
abstract class Zoo{
    abstract show();
}

export class Player extends Action{

}
export class behavior extends Zoo{
    show(){

    }
}

export class Enemy extends Action {

}

const player = new Player('Ammigo');
const enemy = new Enemy('serpie');
     player.shoot();
     enemy.shoot();
     player.shoot();
     enemy.shoot();


