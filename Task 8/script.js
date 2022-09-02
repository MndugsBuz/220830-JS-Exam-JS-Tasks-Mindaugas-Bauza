/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    composition() {
        return this.a + this.b;
    }
    division() {
        return this.a / this.b;
    }
    multiplication() {
        return this.a * this.b;
    }
    substraction() {
        return this.a - this.b;
    }
}

const p1 = new Calculator(20, 10);
console.log(p1.composition());
console.log(p1.division());
console.log(p1.multiplication());
console.log(p1.substraction());
