/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const kgtopound = document.getElementById("search").value*2.2046;
  const kgtograms = document.getElementById("search").value*1000;
  const kgtooz = document.getElementById("search").value*35.274;
  document.getElementById('output1').innerText = `Kilograms to pounds: ${kgtopound}`;
  document.getElementById('output2').innerText = `Kilograms to grams: ${kgtograms}`;
  document.getElementById('output3').innerText = `Kilograms to ounces: ${kgtooz}`;
})


