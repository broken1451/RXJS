import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<string | number>(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1).pipe(
  distinct() // === usa el triple ===
);

numeros$.subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personaje: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Link" },
  { nombre: "X" },
  { nombre: "Zezo" },
  { nombre: "Megaman" },
  { nombre: "Zezo" },
  { nombre: "X" },
];

const arr = from(personaje).pipe(
  distinct((personaje) => {
    return personaje.nombre;
  })
);

arr.subscribe(console.log);
