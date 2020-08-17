import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';



range(1,5).pipe(map<number,string>((valor) => {
    return (valor * 10).toString();
})).subscribe(value => {
    console.log(value);
});


range(1,5).pipe(map<number,number>((valor) => {
    return (valor * 10);
})).subscribe(value => {
    console.log(value);
});



const keyUp$ =  fromEvent<KeyboardEvent>(document, 'keyup');
const keyUpCode$ =  fromEvent<KeyboardEvent>(document, 'keyup');
const keyUpPluck$ = keyUp$.pipe(pluck('target', 'baseURI')); //aca es parecido a la notacion del punto target.baseURI 

// el mapTo permite transformar la entrada en una salida en especifica puede ser lo q sea
const keyUpMappTo$ = keyUp$.pipe(mapTo('Tecla presionada')); 


keyUp$.subscribe((valor)=>{console.log('valor: ', valor)});
// keyUp$.pipe(map((code)=> {
//     return code.code
// })).subscribe((code)=>{console.log('valor/map: ', code)})

keyUpCode$.pipe(map((code)=> {
    return code.code
})).subscribe((code)=>{console.log('valor/map: ', code)})

keyUpPluck$.subscribe((code)=>{console.log('valor/pluck: ', code)})
keyUpMappTo$.subscribe((code)=>{console.log('valor/mapTo: ', code)})
