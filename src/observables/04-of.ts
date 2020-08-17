// el of nos permite crear un observable en base a un listado de elementos
import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
// const obs$ = of(...[1,2,3,4,5,6]);
// const obs$ = of([1,2], {a:1,b:2}, true, function(){}, true, Promise.resolve(true));
// const obs$ = of([1,2], {a:1,b:2}, true, function(){}, true, Promise.resolve(true));

console.log("inicio obs$");
obs$.subscribe(
  (valor) => {
    console.log("valor: ", valor);
  },
  null,
  () => {
    console.log("Terminamos la secuencia de of!");
  }
);
console.log("fin obs$");
