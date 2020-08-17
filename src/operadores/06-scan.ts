import { from } from "rxjs";
import { reduce, tap, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acumulardor, valorActual) => {
  return acumulardor + valorActual;
};

// Reduce
const num$ = from(numeros).pipe(
  tap((valor) => {
    // console.log("tap reduce: ", valor);
  }),
  reduce(totalAcumulador, 0)
);

num$.subscribe((numeros) => {
  console.log("numeros: ", numeros);
});

// SCAN
const num1$ = from(numeros).pipe(
  tap((valor) => {
    console.log("tap scan: ", valor);
  }),
  scan(totalAcumulador, 0)
);

num1$.subscribe((numeros) => {
  console.log("numeros scan: ", numeros);
});

// Redux = manejar el estado global de la aplicacion en un unico objeto
interface User {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const user: User[] = [
  { id: "adri", autenticado: false, token: null },
  { id: "adri", autenticado: true, token: "ABC" },
  { id: "adri", autenticado: true, token: "ABC123" },
];

const totalAcumuladorUsuario = (acumulardor: User, valorActual: User) => {
  return { ...acumulardor, ...valorActual };
};

const state$ = from(user).pipe(
  scan<User>(totalAcumuladorUsuario, { edad: 33 })
);

state$.subscribe((users) => {
  console.log("users: ", users);
});

const id$ = state$.pipe(
  map((state) => {
    return state;
  })
);

id$.subscribe((ids) => {
  console.log("ids: ", ids);
});
