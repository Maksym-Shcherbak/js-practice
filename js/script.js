// TASK 1

//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const answer = prompt("Яка офіційна назва JavaScript?");
// if (answer === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// TASK 2

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const answer = prompt("Ввидіть число")
// let hours = Math.floor(answer / 60)
// hours = String(hours).padStart(2, "0")

// let minutes = answer % 60
// minutes = String(minutes).padStart(2, "0")
// console.log(`${hours}:${minutes}`)

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

const max = 100;
const min = 1;
let total = 0;
for (let i = max; i >= min; i -= 1) {
  console.log(i);
  if (i % 2 === 0) {
    total += i;
  }
}
console.log(total);
