/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        return this.budget >= 100 ? `${this.title} movie budget more then 100 mln USD` : `${this.title} movie budget less then 100 USD`
    }
}

const m1 = new Movie("Titanic", "Cameron", 200);
const m2 = new Movie("The Hurt Locker", "Kathryn Bigelow", 15)
const m3 = new Movie("Saving Private Ryan", "Steven Spielberg", 70)

console.log(m1.wasExpensive());
console.log(m2.wasExpensive());
console.log(m3.wasExpensive());