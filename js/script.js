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

// const max = 100;
// const min = 1;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// Task_4

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case

// const nam = prompt("enter number");
// let result = "";
// switch(nam) {
//   case "1":
//     result = "зима"
//     break
//     case "2":
//     result = "весна"
//     break
//     case "3":
//     result = "літо"
//     break
//     case "4":
//     result = "осінь"
//     break
//     default:
//       result = " введіть число від 1-4"
// }
// console.log(result);

// Task 5

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Ведіть свій логін");
// console.log(login);
// if (login === "Адмін") {
//   const password = prompt("Ведіть пароль");
//   // if (password === "Я головний") { alert("Вітаю!") }
//   // else { alert("Невірний пароль!")}
//   alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!")

// }
// else if (login === "" || login === null) {
//   alert("Скасовано")
// }
// else {
//   alert("Я вас не знаю")
// }

// Task_6
// Переверни рядок у зворотньому порядку
// const string = "Hello";
// let reversString = "";
// for (let i = string.length - 1; i >= 0; i -= 1) {
//     // console.log(string[i])
//     reversString += string[i].toLowerCase()
// }
// console.log(reversString);

// TASK _7
// Напишіть if..else, що відповідає наступному switch:

// const browser = prompt("Enter your browser");

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const number = prompt("Введіть число:");
// if (number % 3 === 0 && number % 5 === 0) {
//   alert("fizzbuzz");
// } else if (number % 3 === 0) {
//   alert("fizz");
// } else if (number % 5 === 0) {
//   alert("buzz");
// } else {
//   alert(number);
// }


// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);

// if (minuteValue <= 15) {
//   alert(`${minuteValue} Входить в першу чверть`);
// }
// else if (minuteValue <= 30) {
//   alert(`${minuteValue} Входить в другу чверть`);
// }
// else if (minuteValue <= 45) {
//   alert(`${minuteValue} Входить в третю чверть`);
// }
// else {
//   alert(`${minuteValue} Входить в четверту чверть`);
// }


// task_10

//При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

let nam = prompt("Введіть число");
let total= 0;
while(nam) {
  total += Number(nam);
  nam = prompt("Введіть число")

}
alert(`Загальна сумма введенних чисел дорівнює ${total}.`);