// 4. Задатак
// Написати програм који исписује таблицу множења за 1 цифру
// Бонус: За додатних 10% поена исписати таблицу множења за све цифре (1-9)

for(let cifra = 1; cifra < 10; cifra++){
  console.log ("Cifra:" + cifra + "")
for (let i = 1; i < 10; i++) {
  let proizvod = i * cifra 
    console.log(`Broj kojim množimo: ${i} (${i} * ${cifra})`)
    console.log(`Prozivod:${proizvod}`)
}
console.log("")
}
