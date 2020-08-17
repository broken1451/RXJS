import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada nisi non diam tincidunt, id gravida est laoreet. Nullam tempus bibendum dui, a vulputate neque accumsan vitae. Donec volutpat nunc eu ultricies vulputate. Suspendisse in est auctor, rutrum ipsum in, molestie nisi. Nullam ut lorem purus. Aliquam sem nibh, viverra eu efficitur consequat, egestas eget sem. Curabitur tincidunt interdum risus, porta imperdiet libero accumsan et. Curabitur ac enim sit amet eros luctus gravida. Proin imperdiet leo nec lacus molestie dapibus. Ut sit amet metus eget velit suscipit tincidunt sit amet sed lacus.
<br>
<br>
Nulla quam nisl, ultricies aliquam dapibus hendrerit, ultricies eu urna. Sed viverra, tortor in rutrum condimentum, turpis ante luctus odio, non tempor nisi mauris vitae orci. Sed nec lacus in enim iaculis vehicula. Aliquam et metus a massa lobortis rhoncus. In auctor elementum tincidunt. Etiam lobortis metus quis magna lacinia, eget pulvinar elit gravida. Suspendisse a metus faucibus, varius odio et, vehicula nisl. Aenean sollicitudin, augue lobortis feugiat efficitur, lectus justo faucibus odio, vitae pharetra diam est ac enim. Sed malesuada fermentum malesuada. Vestibulum at justo magna.
<br>
<br>

Sed condimentum lacinia condimentum. Etiam vel ante ac felis tincidunt pellentesque vel quis leo. Quisque efficitur, quam sed interdum tincidunt, mi neque tempus augue, at fringilla tortor ante sit amet quam. Curabitur ornare quam eget ipsum bibendum hendrerit sed sit amet tortor. Duis vehicula convallis magna facilisis ultricies. In suscipit, sem et commodo fringilla, nisl quam luctus turpis, eget viverra erat est sed nunc. Mauris sodales justo finibus iaculis pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dignissim suscipit fermentum. Nam at dui nulla. Suspendisse potenti. Vestibulum bibendum erat turpis, quis posuere lorem suscipit sit amet. Vestibulum ut ultricies sem, id aliquet sem.
<br>
<br>

Integer vel efficitur nulla, vel sodales quam. Maecenas egestas consectetur leo in ullamcorper. Duis vehicula finibus vehicula. Curabitur cursus velit risus, in tincidunt leo pellentesque quis. Donec non turpis ullamcorper, posuere libero non, suscipit elit. Mauris ipsum tortor, tempor id ante sed, accumsan cursus nisi. Nulla id faucibus felis. Morbi sed purus non tortor sodales efficitur in eu ligula. Nunc sit amet ultrices ipsum. Aliquam mattis placerat egestas. Phasellus quis feugiat risus, ac fermentum arcu. Nam hendrerit erat vel lectus placerat, sit amet blandit odio feugiat. Curabitur rhoncus sodales sapien, at consectetur diam tempus non. Maecenas tristique metus et sagittis luctus. Donec egestas fermentum lectus, non pretium lacus fermentum a.
<br>
<br>

Maecenas vulputate velit vel magna dapibus, vel consequat magna bibendum. Proin imperdiet finibus eros id dictum. Vivamus scelerisque elementum odio sollicitudin sodales. Curabitur sit amet risus ligula. Sed tristique eros id ultricies cursus. Nullam pulvinar est vitae aliquam vulputate. Aenean posuere lobortis porta. Duis sodales eleifend nibh, at consequat augue rhoncus quis.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// funcion que haga el calculo
/* 
  clienteHeight = es el ancho de lo q somos capaces de desplegar en la pantalla sin hacer escroll
  scrollHeight= es todo el contenido el html que se encuentra alli que el usuario tiene en el navegador web y puede hacer scrioll en el
  scrollTop = es todo lo q se ha echo scroll 

*/
const calcularScroll = (event) => {
  // clientHeight
  //scrollHeight
  //scrollTop
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;
  console.log("event", event);
  console.log({ scrollTop, scrollHeight, clientHeight });
  event = (scrollTop / (scrollHeight - clientHeight)) * 100;
  return event;
};

// Streams
const scroll$ = fromEvent(document, "scroll");
// scroll.subscribe(console.log)

const progress$ = scroll$.pipe(
  map((event) => {
    return calcularScroll(event);
  }),
  tap((valor) => {
    console.log("tap: ", valor);
  })
);

progress$.subscribe((porcentaje) => {
  console.log("porcentaje: ", porcentaje);
  progressBar.style.width = `${porcentaje}%`;
});


