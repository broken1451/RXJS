import { Observable, Observer } from "rxjs";

const observe: Observer<any> = {
  next: (value) => console.log("value observer: ", value),
  error: (err) => console.warn("err observer: ", err),
  complete: () => console.info("complete observer"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // crear un contador 1,2,3,4,5,6,.......
  let contador = 0;
  // contador = contador + 1;
  const interval = setInterval(() => {
    contador = contador + 1;
    subscriber.next(contador);
    // subscriber.next(contador++);
    console.log("set interval", contador);
  }, 1000);

  setTimeout(() => {
    //   debugger;
    subscriber.complete();
    console.log('completado')
  }, 2500);

  // Cancelar el setInterval
  return () => {
    clearInterval(interval);
    console.log("intervalo destuido");
  };
});

// const subcripcion = intervalo$.subscribe((num) => {
//   console.log(num);
// });
// const subcripcion2 = intervalo$.subscribe((num) => {
//   console.log(num);
// });
// const subcripcion3 = intervalo$.subscribe((num) => {
//   console.log(num);
// });

const subcripcion = intervalo$.subscribe(observe);
const subcripcion2 = intervalo$.subscribe(observe);
const subcripcion3 = intervalo$.subscribe(observe);

// encadenar subcripciones
subcripcion.add(subcripcion2)
           .add(subcripcion3);

setTimeout(() => {
  subcripcion.unsubscribe();
  // subcripcion2.unsubscribe();
  // subcripcion3.unsubscribe();
  console.log("completado timeout");
}, 6000);
