import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement("button");
boton.innerHTML = "Detener timer";

document.querySelector("body").append(boton);

const countter$ = interval(1000);
// const clickbtn$ = fromEvent(boton, "click");
const clickbtn$ = fromEvent(boton, "click").pipe(
    tap((valor)=>{console.log('tap antes de skip: ', valor)}),
    skip(0),
    tap((valor)=>{console.log('tap despues de skip: ', valor)}),
);

countter$.pipe(takeUntil(clickbtn$)).subscribe({
  next: (valor) => {
    console.log("next: ", valor);
  },
  complete: () => {
    console.log("Complete");
  },
});
