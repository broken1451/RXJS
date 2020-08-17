import { Observable, Observer, Subject } from "rxjs";

const observe: Observer<any> = {
  next: (value) => console.log("value observer: ", value),
  error: (err) => console.warn("err observer: ", err),
  complete: () => console.info("complete observer"),
};

const intervalos$ = new Observable<number>((subscribe) => {
  const interval = setInterval(() => {
    subscribe.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

/* 
* 1) Casteo multiple(muchas subcripciones van a estar sujetas a este mismo observable y va servir para distribuir la misma informacion/data a todos lugares donde esten suscritos o q les interese ese valor )
  2) Tambien es un observer
  3) Next, error y complete

*/
const subject$ = new Subject();

const intervalSubcription = intervalos$.subscribe(subject$);

// const sub1 = intervalos$.subscribe(numroRamdom=>console.log('sub1', numroRamdom))
// const sub2 = intervalos$.subscribe(numroRamdom=>console.log('sub2', numroRamdom))

// const sub1 = subject$.subscribe(numroRamdom=>console.log('sub1', numroRamdom))
// const sub2 = subject$.subscribe(numroRamdom=>console.log('sub2', numroRamdom))
const sub1 = subject$.subscribe(observe);
const sub2 = subject$.subscribe(observe);

setTimeout(() => {
  /* Cuando la data es producida por el observable en si mismo es considerado un  COLD OBSERVABLE, pero  cuando la data es producida  fuera del observable es llamado HOT OBSERVABLE */
  subject$.next(10);
  subject$.complete();
  intervalSubcription.unsubscribe();
}, 3000);
