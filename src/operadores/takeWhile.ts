import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click").pipe(
  map(({ x, y }) => {
    return { x, y };
  }),
  //   takeWhile(({y}) => {
  //       return y <= 150
  //   })
  //   takeWhile(({y},) => {
  //       return y <= 150
  //   },ultimo valor que rompe la condicion inclusive)
  takeWhile(({ y }) => {
    return y <= 150;
  }, true)
);

click$.subscribe({
  next: (value) => {
    console.log("next: ", value);
  },
  complete: () => {
    console.log("complete");
  },
});
