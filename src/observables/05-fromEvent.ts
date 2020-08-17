import { fromEvent, Observer } from "rxjs";

/*Eventos del dom */
const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer: Observer<any> = {
  next: (val) => console.log("valor: ", val),
  error: null,
  complete: () => {
    console.log("completado");
  },
};

// src2$.subscribe(value => {
//     console.log('event:', value.key);
// });

src2$.subscribe((value) => {
  console.log("event:", value.key);
});
// src1$.subscribe(observer);
src1$.subscribe((event) => {
  console.log(event.x);
  console.log(event.y);
});
src1$.subscribe(({ x, y }) => {
  console.log(x, y);
});
