import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5).pipe(
  tap((value) => {
    console.log("tap: ", value);
  }),
  take(3)
);

numeros$.subscribe({
  next: (value) => {
    console.log("valor: ", value);
  },
  complete: () => {
    console.log("complete");
  },
});
