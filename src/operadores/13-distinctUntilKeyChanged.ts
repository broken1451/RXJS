import { of, from } from "rxjs";
import { distinct, distinctUntilChanged, tap, distinctUntilKeyChanged } from "rxjs/operators";

const numeros$ = of<string | number>(1, "1", 1, '3', 3, 2, 2, 4, 4, 5, 3, '1').pipe(
  //   distinct() // === usa el triple ===, esto se va a encargar de solo emitir valores q nunca se hayan emitido previamente
  distinctUntilKeyChanged('toString')
);

numeros$.subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personaje: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Megaman" },
  { nombre: "Link" },
  { nombre: "X" },
  { nombre: "X" },
  { nombre: "Zezo" },
  { nombre: "Megaman" },
  { nombre: "Zezo" },
  { nombre: "X" },
];

const arr = from(personaje).pipe(
  tap((value) => {
    // console.log("value tap: ", value);
  }),
  distinctUntilKeyChanged('nombre')
);

arr.subscribe((personajes) => {
  console.log("persobajes: ", personajes);
});
