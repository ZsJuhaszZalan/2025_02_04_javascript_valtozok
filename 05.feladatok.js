let nev = prompt("Add meg a nevedet: ")
console.log("Hello " + nev);

let oldal1 = prompt("Add meg az elso oldal hosszat: ")
let oldal2 = prompt("Add meg a masodik oldal hosszat: ")
let kerulet = (Number(oldal1) + Number(oldal2)) * 2
let terulet = Number(oldal1) * Number(oldal2)
console.log(kerulet + " a téglalap kerülete")
console.log(terulet + " a téglalap területe")

let sugar = prompt("Adj meg egy kor sugarat: ")
let terulets = sugar * sugar * Math.PI
let kerulets = sugar * 2 * Math.PI
console.log(`${kerulets} a kör kerülete`)
console.log(`${terulets} a kör területe`)