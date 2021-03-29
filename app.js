const celciusInput = document.querySelector("#celcius > input");
const reamurInput = document.querySelector("#reamur > input");
const farenheitInput = document.querySelector("#farenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
  return Math.round(num * 100)/100;
}

function celciusToReamurAndFarenheitAndKelvin() {
  const cTemp = parseFloat(celciusInput.value);
  const rTemp = (4 / 5) * cTemp;
  const fTemp = (cTemp * (9 / 5)) + 32;
  const kTemp = cTemp + 273.15;
  reamurInput.value = roundNum(rTemp);
  farenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function reamurToCelciusAndFarenheitAndKelvin() {
  const rTemp = parseFloat(reamurInput.value);
  const cTemp = (5 / 4) * rTemp;
  const fTemp = (9 / 4) * rTemp + 32;
  const kTemp = cTemp + 273.15;
  celciusInput.value = roundNum(cTemp);
  farenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function farenheitToCelciusAndReamurAndKelvin() {
  const fTemp = parseFloat(farenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const rTemp = (fTemp - 32) * (4 / 9)
  const kTemp = (fTemp + 459.67) * (5 / 9);
  celciusInput.value = roundNum(cTemp);
  reamurInput.value = roundNum(rTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndReamurAndFarenheit(){
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const rTemp = (4 / 5) * (kTemp - 273.15)
  const fTemp = (9 / 5) * (kTemp -273.15) + 32;
  celciusInput.value = roundNum(cTemp);
  reamurInput.value = roundNum(rTemp);
  farenheitInput.value = roundNum(fTemp); 
}

function main(){
  celciusInput.addEventListener("input", celciusToReamurAndFarenheitAndKelvin);
  reamurInput.addEventListener("input", reamurToCelciusAndFarenheitAndKelvin);
  farenheitInput.addEventListener("input", farenheitToCelciusAndReamurAndKelvin);
  kelvinInput.addEventListener("input", kelvinToCelciusAndReamurAndFarenheit);
}

main()

function init() {
  document.querySelector("#celcius > input").value = "";
  document.querySelector("#reamur > input").value = "";
  document.querySelector("#farenheit > input").value = "";
  document.querySelector("#kelvin > input").value = "";
}
window.onload = init;

