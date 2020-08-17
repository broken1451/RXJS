// import { fromEvent } from "rxjs";
// import { debounceTime, map, pluck } from "rxjs/operators";
// import { ajax, AjaxError } from "rxjs/ajax";

// const body = document.querySelector("body");
// const textInput = document.createElement("input");
// const listOrder = document.createElement("ol");

// body.append(textInput, listOrder);

// // streams
// const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

// input$
//   .pipe(
//     debounceTime(500),
//     map((event) => {
//       const text = event.target["value"];
//       const url = `https://api.github.com/users/${text}`;
//       //   return text;
//       return ajax.getJSON(url);
//     })
//   )
//   .subscribe((res) => {
//     console.log("res: ", res);
//     res.pipe(pluck("url")).subscribe((res) => {
//       console.log("res 2: ", res);
//     });
//   });

import { fromEvent, asyncScheduler } from 'rxjs';
import {
  debounceTime,
  tap,
  map,
  pluck,
  distinctUntilChanged,
  throttleTime,
} from "rxjs/operators";

const click$ = fromEvent(document, "click").pipe(throttleTime(3000));

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

const throttleConfig = {
    leading: true, // primer elemento 
    trailing: true // ultimo elemento
}

const input$ = fromEvent<KeyboardEvent>(input, "keyup").pipe(
  tap<KeyboardEvent>((value) => {
    console.log("tap: ", value);
  }),
  throttleTime(1000,asyncScheduler,throttleConfig),
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

