import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = `https://httpbin.org/delay/1`;
const header = {
  "Content-Type": "application/json",
  "mi-token": "ABC123456",
};

// ajax.get(url, header).subscribe(console.log);
// ajax.post(url, { id: 1, nombre: "Adrian" }, header).subscribe(console.log);
// ajax.put(url, { id: 1, nombre: "Adrian" }, header).subscribe(console.log);
// ajax.delete(url, header).subscribe(console.log);

// otra manera
ajax({
  url: url,
  method: "DELETE",
  headers: header,
  body: {
    id: 1,
    nombre: "Adrian",
    rxjs: "Hello World!",
  },
}).subscribe(console.log);
