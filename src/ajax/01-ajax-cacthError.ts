import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";

const url = `https://api.github.com/users?per_page=5`;

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error(`ERROR ${response.statusText}`);
  }
  return response;
};

const atrapaErr = (err: AjaxError) => {
    console.warn(err.message);
    // puede retornar el error, arry o observable
    return of({});
}

const fetcPromesa = fetch(url);

// fetcPromesa
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data: ", data);
//   })
//   .catch((err) => console.warn("err", err));

// fetcPromesa
//   .then((res) => manejaErrores(res))
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data: ", data);
//   })
//   .catch((err) => {
//     console.warn("err en usuario", err);
//     // manejaErrores(err);
//   });

ajax(url)
  .pipe(
    // map((resp) => {
    //   return resp.response;
    // })
    pluck("response"),
    catchError(err => {
        return atrapaErr(err);
    })
  )
  .subscribe((user) => {
    console.log("usuarios: ", user);
  });
