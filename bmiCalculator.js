function updateNums() {
  let inches = document.getElementById("heightImp");
  let cents = document.getElementById("heightMet");
  let pounds = document.getElementById("weightImp");
  let kilos = document.getElementById("weightMet");
  let bmi = document.getElementById("bmi");
}

function clearFields() {
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }
}

function convertHeight(type) {
  let inches = document.getElementById("heightImp");
  let cents = document.getElementById("heightMet");
  if (type === "imp") {
    cents.value = (inches.value * 2.54).toFixed(2);
  } else {
    inches.value = (cents.value / 2.54).toFixed(2);
  }
  let kilos = document.getElementById("weightMet");
  getBmi(kilos.value, cents.value);
}

function convertWeight(type) {
  let pounds = document.getElementById("weightImp");
  let kilos = document.getElementById("weightMet");
  if (type === "imp") {
    kilos.value = (pounds.value / 2.205).toFixed(2);
  } else {
    pounds.value =(kilos.value * 2.205).toFixed(2);
  }
  let cents = document.getElementById("heightMet");
  if (cents.value > 0) {
    getBmi(kilos.value, cents.value);
  }
}

function getBmi(weight, height) {
  let bmi = document.getElementById("bmi");
  bmi.value = (weight / ((height / 100) ** 2)).toFixed(2);

  let riskBar = document.getElementById("riskBar");
  riskBar.style.left = `${((bmi.value - 15) / 25) * 100}%`;
}

function calcWeight() {
  let bmi = document.getElementById("bmi");
  let cents = document.getElementById("heightMet");
  let pounds = document.getElementById("weightImp");
  let kilos = document.getElementById("weightMet");

  kilos.value = (bmi.value * ((cents.value / 100) ** 2)).toFixed(2);
  pounds.value = (kilos.value * 2.205).toFixed(2);

  let riskBar = document.getElementById("riskBar");
  riskBar.style.left = `${((bmi.value - 15) / 25) * 100}%`;
}
