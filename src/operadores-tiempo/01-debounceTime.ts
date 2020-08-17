import { fromEvent } from "rxjs";
import {
  debounceTime,
  tap,
  map,
  pluck,
  distinctUntilChanged,
} from "rxjs/operators";

const click$ = fromEvent(document, "click").pipe(debounceTime(3000));

click$.subscribe({
  next: (value) => {
    console.log("next: ", value);
  },
  complete: () => {
    console.log("Complete");
  },
});

//Ejempo dos

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup").pipe(
  tap<KeyboardEvent>((value) => {
    console.log("tap: ", value);
  }),
  debounceTime(1000),
  distinctUntilChanged(),
  //   map((event) => {
  //       return event.target['value']
  //   })
  pluck("target", "value")
);

input$.subscribe({
  next: (value) => {
    console.log("next: ", value);
  },
  complete: () => {
    console.log("Complete");
  },
});
