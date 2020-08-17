import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

// Nos permite disparar efectos secundarios
// Realice un efecto secundario para cada emisión en la fuente Observable, pero devuelva un Observable que sea idéntico a la fuente.

const numeros$ = range(1, 5).pipe(
  tap((val) => {
    console.log("primer tap: ", val);
    return 100; // no modifica  el flujo de informacion
  }),
  map((valor) => {
    return valor * 10;
  }),
  tap((val) => {
    console.log("segundo tap:", val);
  }),
  tap({
    next: (valor) => console.log("3er tap", valor),
    complete: () => {
      console.log("Se termino todo con el tap");
    }, // se ejecuta cuando todo el sobservable se complete/termina
  })
);

numeros$.subscribe((val) => {
  console.log("val sub: ", val);
});
