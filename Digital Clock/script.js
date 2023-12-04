const clock = document.getElementById("clock");

let date = new Date();
const time = date.toLocaleTimeString();

setInterval(function () {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = `<p style="font-size: 55px;">${date.toLocaleTimeString()}</p>`;
}, 1000);


