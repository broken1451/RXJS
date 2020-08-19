import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll, tap } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";
import { GithubUser, Item } from '../interfaces/gitHub-user.interface';

const body = document.querySelector("body");
const textInput = document.createElement("input");
const listOrder = document.createElement("ol");

body.append(textInput, listOrder);



// Helpers
const mosrtrarUsuarios = (usuarios: Item[]) => {

  console.log('usuarios: ', usuarios);
  listOrder.innerHTML = '';

  for (const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;
    const a = document.createElement('a');
    a.href = usuario.html_url;
    a.text = 'Ver perfil';
    a.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(a);
    
    listOrder.append(li);

  }

  
}

//mergeAll sirve para trabajar con observables que internamente retornan un observable
// streams
// <entrada, salida>
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>("target", "value"),
    tap<string>((value) => {
      console.log("tap: ", value);
    }),
    map<string, Observable<GithubUser>>((text) => {
      //   const text = event.target["value"];
      console.log("text: ", text);
      const url = `https://api.github.com/search/users?q=${text}`;
      //   return text;
      return ajax.getJSON(url);
    }),
    mergeAll<GithubUser>(),
    pluck<GithubUser, Item[]>("items")
  )
  .subscribe((res) => {
    console.log("res: ", res[0].login);
    mosrtrarUsuarios(res)
    // res.pipe(

    // ).subscribe((res) => {
    //   console.log("res 2: ", res);
    // });
  });
