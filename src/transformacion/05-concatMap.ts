import { interval, fromEvent } from "rxjs";
import { take, switchMap, tap, concatMap } from "rxjs/operators";
// concatMap es para concatenar los observables

const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, "click");

click$
  .pipe(
    tap((valor) => {
      console.log("tap: ", valor);
    }),
    // switchMap((valor) => {
    //   console.log("switchMap: ", valor);
    //   return interval$;
    // })
    concatMap((valor) => {
      console.log("concatMap: ", valor);
      return interval$;
    })
  )
  .subscribe((valor) => {
    console.log("respuesta: ", valor);
  });
