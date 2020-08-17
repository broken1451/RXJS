import { range, of, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1,10).pipe(filter(value => {
//     // console.log('value filter: ', value)
//     return value % 2  === 1
// })).subscribe(valor=>{
//     console.log('valor:', valor);
// });

range(1, 10)
  .pipe(
    filter((value, index) => {
      //   console.log("value filter: ", value);
      //   console.log("index filter: ", index);
      return value % 2 === 1;
    })
  )
  .subscribe((valor) => {
    // console.log('valor:', valor);
  });

interface Personaje {
  tipo: string;
  nombre: string;
}

const pesonajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

// const persons$ =  of<Personaje>(...pesonajes).pipe(filter((personaje: any) => {
//     // console.log('personaje: ', personaje)
//     return personaje.tipo !== 'heroe';
// })).subscribe((valor)=>{
//     console.log(valor)
// });

const persons$ = from(pesonajes).pipe(
  filter((personaje: any) => {
    // console.log('personaje: ', personaje)
    return personaje.tipo == "heroe";
  })
);

persons$.subscribe((personajes) => {
  console.log("persons subs", personajes);
});

// Encadenamiento de operadores, los operadores se ejecutan de arriba abajo
const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => {
    return event.code;
  }),
  filter((key) => {
    return key == "Enter";
  })
);

keyUp$.subscribe(console.log);
