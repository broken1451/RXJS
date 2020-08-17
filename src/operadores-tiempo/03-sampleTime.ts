import { fromEvent } from "rxjs";
import { map, sampleTime } from 'rxjs/operators';
//  el sample time nos pemite tener el ultimo valor emitido en un intervalo de tiempo

const click$ = fromEvent<MouseEvent>(document, "click").pipe(
    sampleTime(2000),
    map(({x,y}) => {
        return { x, y}
    }),
);

click$.subscribe({
  next: (value) => {
    console.log("next: ", value);
  },
  complete: () => {
    console.log("Complete");
  },
});
