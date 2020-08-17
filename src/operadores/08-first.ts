import { fromEvent } from "rxjs";
import { take, first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click").pipe(
  // take(1)
  tap((valor) => {
    console.log("tap: ", valor);
  }),
  //   map((event) => {
  //     return { clientY: event.clientX, clientX: event.clientX };
  //   })
  map(({ clientX, clientY }) => {
    return { clientY: clientY, clientX: clientX };
  }),
  first((event) => {
    return event.clientY >= 150;
  })
);

click$.subscribe({
  next: (valor) => {
    console.log("valor next: ", valor);
  },
  complete: () => {
    console.log("complete");
  },
});
