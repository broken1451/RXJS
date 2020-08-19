import { fromEvent, of } from "rxjs";
import {
  tap,
  map,
  mergeMap,
  pluck,
  catchError,
  switchMap,
  exhaustMap,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// funcion auxiliar / helper
const peticionHttpLogin = (user) => {
  let url = `https://reqres.in/api/login?delay=1`;
  return ajax.post(url, user).pipe(
    pluck("response", "token"),
    catchError((err) => {
      return of("Error token no valido: ", err);
    })
  );
  // .pipe(
  //   pluck('response', 'token')
  // );
};

// creado un formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const btnSubmit = document.createElement("button");

// configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "password";
inputPass.value = "cityslicka";

btnSubmit.innerHTML = "Ingresar";

form.append(inputEmail, inputPass, btnSubmit);

document.querySelector("body").append(form);

// streams
const submitForm = fromEvent<Event>(form, "submit").pipe(
  // el tap emite dispara un efecto secundario q no modifica el flujo de informacion o de eventos que se emiten atraves del observable
  tap((event) => {
    console.log("tap: ", event);
    event.preventDefault();
  }),
  map((event) => {
    return {
      email: event.target[0].value,
      password: event.target[1].value,
    };
  }),
  // mergeMap((valor) => {
  //   return peticionHttpLogin(valor);
  // })
  // switchMap((valor) => {
  //   return peticionHttpLogin(valor);
  // })
  exhaustMap((valor) => {
    return peticionHttpLogin(valor);
  })
  // pluck("response", "token")
);

submitForm.subscribe((valor) => {
  console.log("resp: ", valor);
});
