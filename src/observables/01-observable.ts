// Ibservables, observer y subcriber

import { Observable, Observer } from "rxjs";

// 3ra manera de para ejecutar un subcribe, el observer es una interfaz
const observer: Observer<any> = {
  next: (value) => console.log("value observer: ", value),
  error: (err) => console.warn("err observer: ", err),
  complete: () => console.info("complete observer"),
};

// const observable$ = Observable.create() una manera de crear un observable no es muy comun
const observable$ = new Observable<string>((subcriber) => {
  // el next emite los valores que quiero a los que estan subcritos a el
  subcriber.next("hola");
  subcriber.next("hola mundo");
  subcriber.next("hola mmgvo");

  // Forzar un error
//   const a  = undefined
//   a.nombre = 'adrian'

  subcriber.complete();
  // despues de este punto del metodo complete no se va a emitir mas ningun valor, ninguna emision posterior a la llamada del complete va a ser notificada a su subcriptor
  subcriber.next("hola mundooooooo");
  subcriber.next("hola mmgvooooooo");
});

// 1 una manera
// observable$.subscribe((res)=>{
//     console.log('res: ', res);
// });

// 2da manera
// observable$.subscribe((value)=>{
//     console.log('valor next emitido por subcriber: ', value);
// },(err)=>{
//     console.warn('err:', err);
// },()=>{
//     console.info('complete');
// })
// console.log('Hola Mundo adrian todo bien ?!');

// 3ra manera
observable$.subscribe(observer);
// observable$.subscribe()




