/* This is used without index file direct */
import Ford from './ImportExport/Ford';/* export default Ford */
import {Tata} from './ImportExport/Tata'; /* export class Tata{ } */
/*  */

/*With help of index file only folder have to mention*/
import {Jaguuar,Oddi,Ferari} from './ImportExport/main'
  
const ford = new Ford();
  const tata = new Tata();

  const Jagu = new Jaguuar();
  const odi = new Oddi();
  const ferari = new Ferari();

  Jagu.speed();
  odi.speed();
  ferari.speed();
  /*  */