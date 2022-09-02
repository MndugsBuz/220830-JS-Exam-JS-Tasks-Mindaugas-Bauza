/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';

const data = {}

fetch('./cars.json').then((response) => response.json()).then((data) => renderData(data))

function renderCars() {
  const thead = document.querySelector('#output');
  const thbrand = document.createElement('th')
  thbrand.innerText = 'BRAND'
  const thmodel = document.createElement('th')
  thmodel.innerText = 'MODEL'
  const tr = document.createElement('tr');
  tr.append(thbrand, thmodel);
  thead.append(tr);
};

renderCars();

function renderData(data) {

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].brand);
    let j = 0;
    for (let j = 0; j < data[i].models[j].length; j++) {
      console.log(data[i].models[j]);
      const tbody = document.querySelector('#output');
      const tr = document.createElement('tr');
      const tbbrandbody = document.createElement('th')
      const tbmodels = document.createElement('th')
      tbbrandbody.innerText = data[i].brand;
      tbmodels.innerText = data[i].models[j];
      tr.append(tbbrandbody, tbmodels);
      tbody.append(tr);
    }
  }
}



