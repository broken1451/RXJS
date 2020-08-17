import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";
// auditTime emite el utimo valor que ha sido emitido por el observable en un perido de tiempo determinado

const click$ = fromEvent<MouseEvent>(document, "click").pipe(
  map(({ x, y }) => {
    return { x };
  }),
  tap((value) => {
    console.log("tap: ", value);
  }),
  auditTime(2000)
);

click$.subscribe(console.log);
