import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, tap, takeUntil } from "rxjs/operators";
// mergaMap es un operador de aplanamiento, se obtiene el producto de la subscriocion del mismo

const letras$ = of("a", "b", "c");

letras$.pipe(
  mergeMap((letra) => {
    console.log(letra);
    return interval(1000).pipe(
      tap((va) => {
        console.log("tap:", va);
      }),
      map((i) => letra + i),
      take(3)
    );
  })
);
// .subscribe({
//   next: (val) => {
//     console.log("next: ", val);
//   },
//   complete: () => {
//     console.log("Complete");
//   },
// });

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval(1000);

mouseDown$
  .pipe(
    mergeMap((valor) => {
      console.log("valor: ", valor);
      return interval$.pipe(takeUntil(mouseUp$));
    })
  )
  .subscribe((res) => {
    console.log("res: ", res);
  });
