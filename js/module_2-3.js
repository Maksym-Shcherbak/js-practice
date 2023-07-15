// TASK 1
// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
const index = styles.indexOf("Блюз");
styles.splice(index, 1, "Класика");

console.log(styles.shift());

styles.unshift("Реп", "Реггі");
console.log(styles);

//TASK 2
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const login = prompt("Введіть логін:");
//   if (logins.includes(login)) {
//     alert("Доступ дозволено");
//   } else {
//     alert("Користувач не знайден");
//   }
// }
// checkLogin(logins);

// TASK 3

// Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Данні мають бути числами";
//   }
//   return Math.min(a, b);
// }
// console.log(min("Hi", 10));

// TASK 4

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);
