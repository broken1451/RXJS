// asyncScheduler no crea un observable, crea una subscripcion
import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);
//  estas dos instrucciones es lo q podemos hacer con asyncScheduler

const saludar = () => {
  console.log("hola mundo");
};
// const saludar2 = (nombre) =>{ console.log('hola ' + nombre)}
// const saludar2 = (nombre, apellido) =>{ console.log('hola ' + nombre + ' ' + apellido)}
const saludar2 = ({ nombre, apellido }) => {
  console.log("hola " + nombre + " " + apellido);
};

// asyncScheduler.schedule(funcion que queremos ejecutar, cantidad de tiempo o deley q queremos ejecutar )
// asyncScheduler.schedule(saludar, 2000);

// asyncScheduler.schedule(saludar2, 2000, state:valor de de estado  lo q va a ser el schedule/no se puede mandar mas parametros);
// asyncScheduler.schedule(saludar2, 2000, 'Adrian');
// SET TIMEOUT
asyncScheduler.schedule(saludar2, 2000, {
  nombre: "adrian",
  apellido: "apellido",
});

// SET INTERVAL
// asyncScheduler.schedule(funcion q no puede ser una funcion de flecha, cantidad de tiempo o deley  en el cual se empiece a ejecutar, puede ser cualquier cosa pero debe ser un argumeto )
const subscription = asyncScheduler.schedule(
  function (state) {
    console.log("state: ", state);
    this.schedule(state + 1, 1000);
  },2000,0);

asyncScheduler.schedule(() => {
  subscription.unsubscribe();
}, 6000);

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);
