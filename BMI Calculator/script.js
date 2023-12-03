const form = document.querySelector("form");

/*
                          weight in kilograms
BMI (Body Mass Index) = -------------------------
                          (height)^2 
*/

// console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  if (height <= 0 || height === "" || isNaN(height)) {
    alert("kindly enter valid height");
  } else if (weight <= 0 || weight === " " || isNaN(weight)) {
    alert("kindly enter valid weight");
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<b> BMI : ${bmi}</b>`;
  }

});
