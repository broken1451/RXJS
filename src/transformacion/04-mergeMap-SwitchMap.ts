import { fromEvent, interval } from "rxjs";
import { mergeMap, tap, switchMap } from "rxjs/operators";

const click$ = fromEvent(document, "click");

const interval$ = interval(1000);

// click$
//   .pipe(
//     tap((valor) => {
//       console.log("tap: ", valor);
//     }),
//     mergeMap((valor) => {
//       console.log("mergeMap: ", valor);
//       return interval$;
//     })
//   )
//   .subscribe(console.log);

/* 
el switchMap solo mantiene una subscripcion interna activa y 
mergeMap puede mantener todas las subscripciones activas simultaneamente
*/

click$
  .pipe(
    tap((valor) => {
      console.log("tap: ", valor);
    }),
    switchMap((valor) => {
      console.log("switchMap: ", valor);
      return interval$;
    })
  )
  .subscribe(console.log);
