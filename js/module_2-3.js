// TASK 1
// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");
// const index = styles.indexOf("Блюз");
// styles.splice(index, 1, "Класика");

// console.log(styles.shift());

// styles.unshift("Реп", "Реггі");
// console.log(styles);

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

//TASK 5

// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:

// const age = prompt("Enter your age");

// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         return confirm('Are you really adult?')
//     }
// }

// console.log(isAdult(age))

//TASK 6

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function getSum(array) {
//     const newArray = [];
//     for (let i = 0; i < array.length - 1; i += 1) {
//         newArray.push(array[i] + array[i + 1]);
//     }
//     return newArray
// }

// console.log(getSum(someArr))

// TASK 7
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let total = 0;
//   let count = 0;

//   for (const arg of args) {
//     if (typeof arg === "number") {
//       total += arg;
//       count += 1;
//     }
//   }
//   return total / count;
// }
// console.log(caclculateAverage(1, 2, 3, 4, 5));

// TASK 8
//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userKeys = Object.keys(user);

for (const key of userKeys) {
  console.log(`${key} : ${user[key]}`);
}
