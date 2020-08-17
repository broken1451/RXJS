import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";
// el operador reduce no va emitir respuesta hasta q se complete

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulardor: number, valorActual: number) => {
  return acumulardor + valorActual;
};

// const total = numbers.reduce(totalReducer, valorDeInicio);
const total = numbers.reduce(totalReducer, 0);

console.log({ total });

const intervalo$ = interval(1000).pipe(
  // el operador take va a completar el observable despues de la cantidad de veces q le diga dentro de el
  take(6),
  tap((valor) => {
    console.log("valor tap1: ", valor);
  }),
//   reduce(totalReducer, estadoinicial), // si no se manda el valor inicial en el segundo argumento por defecto toma el valor de 0
  reduce(totalReducer), // si no se manda el valor inicial en el segundo argumento por defecto toma el valor de 0
  // tap((valor) => {
  //   console.log("valor tap2: ", valor);
  // })
);

intervalo$.subscribe({
  next: (valor) => {
    console.log("valor next: ", valor);
  },
  complete: () => {
    console.log("Complete el intervalo");
  },
});
