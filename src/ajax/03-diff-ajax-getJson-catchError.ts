import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = `https://httpbin.org/delxay/1`;
// const url = `https://api.github.com/users?per_page=5`;
const header = {
  "Content-Type": "application/json",
  "mi-token": "ABC123456",
};

const manejaError = (err: AjaxError) => {
  console.warn("error: ", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

// const obs$ = ajax.getJSON(url, header).pipe(
//     catchError(err=>{
//         return manejaError(err);
//     })
// );
// const obs1$ = ajax(url).pipe(
//     catchError(err=>{
//         return manejaError(err);
//     })
// );

const obs$ = ajax.getJSON(url, header).pipe(
  catchError((err) => {
    return manejaError(err);
  })
);
const obs1$ = ajax(url);

obs$.subscribe({
  next: (value) => {
    console.log("next: ", value);
  },
  error: (err) => {
    console.warn("error: ", err);
    // return manejaError(err)
  },
  complete: () => {
    console.log("complete");
  },
});

// obs1$.subscribe((data) => {
//   console.log("data AJAX: ", data);
// });
