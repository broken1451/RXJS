import { of, from } from "rxjs";

/* 
of =  crea un observable , toma argumentos y genera una secuencia de valores
from = crea un observable  en base a un array, {}, promesa, observable
*/

const observer = {
  next: (value) => console.log("next: ", value),
  complete: () => console.log("complete"),
};

/*
    funciones generadoras
*/
// const generador = function * el * dice q es una funcion generadora() {
const generador = function* () {
  yield 1;
  yield 2; // el yield loq hace es emitir los valores
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  // console.log(yield);
};

const iterable: any = generador();

// for (const id of iterable) {
//     console.log(iterable)
//     console.log(id)
// }

from(iterable).subscribe(observer);

// const source$ =  from([1,2,3,4,5]);
// const source$ =  of([1,2,3,4,5]);
// const source$ =  from('Adrian');

const source$ = from<Promise<Response>>(
  fetch("https://api.github.com/users/klerith")
);

// source$.subscribe(observer);
// source$.subscribe( async (res) => {
//     console.log(res.type)
//     // console.log(res.body)
//     const dataRespuesta = await res.json();
//     console.log(dataRespuesta)
// });
