// 3. Задатак
// Написати програм који исписује збир бројева дељивих са 3, и производ бројева који нису дељиви
// са 3,а јесу са 7 (Између K и N, укључујући њих)
// Напомена: K може да буде веће од N

let K = 3
let N = 35
let zbir = 0
let proizvod = 1

if (K > N) {[K,N] = [N,K]}

for (i = K; i <= N; i++) {
    if (i % 3 === 0) {zbir +=i}
    else if (i % 3 !== 0 && i % 7 === 0) {proizvod *= i}
}
console.log ("Zbir: " + zbir)
console.log ("Prozivod: " + proizvod)
