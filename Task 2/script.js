/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


counter = 0;

document.querySelector('#btn__element').addEventListener('click', (event) => {
  event.preventDefault();
  counter += 1;
  document.getElementById('btn__state').innerText = `${counter}`;

})