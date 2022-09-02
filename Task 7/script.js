/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};


function showObjectKeys(audi){

  console.log(Object.keys(audi));
  console.log(`keys:`, Object.keys(audi).length);

};

showObjectKeys(audi)