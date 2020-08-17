import { interval, fromEvent } from 'rxjs';
import { sample, tap } from 'rxjs/operators';
// el operador sample emite el ultimo valor emitido por el observable hasta que el otro ebservable que tenemos dentro del operador sample emita un valor

const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(
    tap((value)=>{console.log('tap: ', value)}),
    sample(click$)
);



interval$.subscribe(console.log)


