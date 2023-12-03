const box = document.querySelectorAll(".box");
const body = document.querySelector("body");

box.forEach(function (boxes) {
  boxes.addEventListener("click",  (event) => {
    console.log(event);
    console.log(event.target);
    const target = event.target.id;
    switch (target) {
      case "blue":
        body.style.backgroundColor = target;
        break;
      case "green":
        body.style.backgroundColor = target;
        break;
      case "orange":
        body.style.backgroundColor = target;
        break;
      case "red":
        body.style.backgroundColor = target;
        break;
      case "black":
        body.style.backgroundColor = target;
        body.style.color='white';
        break;
        default :
        body.style.backgroundColor = 'white'
    }
  });
});
