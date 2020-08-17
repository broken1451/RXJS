import { range, of, asyncScheduler } from "rxjs";

// const src$ = of(1,2,3,4,5);
const src$ = range(1, 5, asyncScheduler); // cualquier funcion q reciba asyncScheduler  podemos transformarla  de ser sincrona por la naturaleza a ser asincrona

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
