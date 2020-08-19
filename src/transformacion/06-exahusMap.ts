import { exhaustMap } from "rxjs/operators";
import { interval, fromEvent } from "rxjs";
import { take, switchMap, tap, concatMap } from "rxjs/operators";
// exhaustMap solo mantiene una subscripcion interna activa antes de anadir otra subscripcion para emitir los valores, esto es util  cuando  tenemos objetos o elementos q estan emitiendo eventos rapidamente

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
    exhaustMap((valor) => {
      console.log("exhaustMap: ", valor);
      return interval$;
    })
  )
  .subscribe((valor) => {
    console.log("respuesta: ", valor);
  });
