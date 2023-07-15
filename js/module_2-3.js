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
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(`${key} : ${user[key]}`);
// }
// TASK 9
//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const values = Object.values(salaries);
// let salarySum = 0;
// for (const val of values) {
//   salarySum += val;
// }
// console.log(salarySum);

// TASK 10
//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// Додаткова перевірка на наявність каменю в масиві об'єктів - ДЗ

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(stones, stonesName) {
//   let totalPrice = 0;
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       totalPrice += stone.price * stone.quantity;
//     }
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(stones, "Сапфір"));

//TASK 11
//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат

// const calculator = {
//   read(a, b) {
//     if (a) this.value1 = a;
//     if (b) this.value2 = b;
//   },
//   sum() {
//     if (this.value1 && this.value2) {
//       return this.value1 + this.value2;
//     }
//     return "Немає потрібних значень";
//   },
//   mult() {
//     if (this.value1 && this.value2) {
//       return this.value1 * this.value2;
//     }
//     return "Немає потрібних значень";
//   },
// };

// calculator.read(6);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator);

//TASK 12
//7. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },
  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push({ ...transaction, id: amount });
    return this.transactions;
  },
  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
      this.transactions.push({
        ...transaction,
        id: Math.random().toFixed(4),
      });
      return this.transactions;
    }
    return "Недостатньо коштів на рахунку";
  },
  //Метод повертає поточний баланс
  getBalance() {
    return `На вашому рахунку ${this.balance} коштів`;
  },

  //Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Транзакцію не знайдено";
  },

  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {
    let totalTransactions = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalTransactions += transaction.amount;
      }
    }
    return totalTransactions;
  },
  removeTransaction(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        this.transactions.splice(i, 1);
        return this.transactions;
      }
    }
  },
};
// Math.random().toFixed(4) }
console.log(account.deposit(5600));
console.log(account.withdraw(3400));
console.log(account.withdraw(5800));
console.log(account.deposit(4580));
console.log(account.getTransactionDetails(5700));
console.log(account.getTransactionType(Transaction.DEPOSIT));
console.log(account.removeTransaction(5600));
console.log(account.getBalance());
