import { ajax, AjaxError } from "rxjs/ajax";

const url = `https://httpbin.org/delay/1`;
// const url = `https://api.github.com/users?per_page=5`;
const header = {
  "Content-Type": "application/json",
  "mi-token": "ABC123456",
};
const obs$ = ajax.getJSON(url, header);

obs$.subscribe((data) => {
  console.log("data: ", data);
});
