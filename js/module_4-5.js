// THIS
// 1. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// 2. Яким буде результат виклику функції?
// function f() {
//   console.log(this.name);
// }

// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });

// foo();

// 3. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

// const user = {
//   name: "Mango",
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Перебираючі методи масивів

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Task 1

// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// function getUserNames(array) {
// return array.map((item) => {
//   return item.name;
// });
// }
// console.log(getUserNames(users));

// Task 2

// Отримати масив об'єктів користувачей по кольору очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'є'кт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// function getUsersWithEyeColor(arr, color) {
//   return arr.filter((item) => item.eyeColor === color);
// }

// console.log(getUsersWithEyeColor(users, "blue"));

// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge (users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// function getUsersWithAge(users, min, max) {
//   return users.filter(({ age }) => age >= min && age <= max);
// }

// console.log(getUsersWithAge(users, 20, 30));

// function getUniversalValue(users, prop, value) {
//   return users.filter((item) => item[prop] === value);
// }

// console.log(getUniversalValue(users, "gender", "male"));

// Task 3

// Отримати загальну суму баланса (поле balance) усіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916
// function calculateTotalBalance(arr) {
//   return arr.reduce((total, item) => total + item.balance, 0);
// }

// console.log(calculateTotalBalance(users));

// TASK 8

// Класи

//1. Створи клас User для створення користувача з такими властивостями:
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// class User {
//   constructor({ userName, age, numbersOfPost }) {
//     this.userName = userName;
//     this.age = age;
//     this.numbersOfPost = numbersOfPost;
//   }
//   getInfo() {
//     console.log(
//       `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     );
//   }
// }
// const user1 = new User({
//   userName: "Mango",
//   age: 34,
//   numbersOfPost: 15,
// });
// console.log(user1);
// user1.getInfo();

// TASK 9
// Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get getClientData() {
//     return { clientLogin: this.#login, clientEmail: this.#email };
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const newClient = new Client("Mango", "vgi@gmai.com");
// console.log(newClient);
// newClient.changeEmail = "hyfy@gmai.com";
// console.log(newClient.getClientData);

// TASK 10

// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас TopLevelWorker, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

// class Worker {
//   constructor(obj) {
//     const { name, age, salary } = obj;
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   getSalary() {
//     console.log(`Worker ${this.name} has salary ${this.salary} dollars`);
//   }
// }
// class TopLevelWorker extends Worker {
//   constructor(obj, position) {
//     super(obj);
//     this.position = position;
//   }
//   getPosition() {
//     console.log(`${this.name} works as ${this.position}`);
//   }
// }
// const tango = { name: "Tango", age: 15, salary: 1560 };
// const worker = new TopLevelWorker(tango, "top");
// console.log(worker);
// worker.getSalary();
// worker.getPosition();

// TASK 11

//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

class Notes {
  static Priority = {
    HIGHT: "hight",
    MIDDLE: "middle",
    LOW: "low",
  };
  constructor() {
    this.items = [];
  }
  addNote(note) {
    if (
      this.items.some(
        (item) => note.text.toLowerCase() === item.text.toLowerCase()
      )
    ) {
      return showModal(
        `Error! Note "${note.text}" is already in your collection!`
      );
    }
    this.items.push(note);
    return showModal(`Your note that called "${note.text}" added succesfully`);
  }
  removeNote(noteText) {
    if (
      !this.items.some(
        (item) => noteText.toLowerCase() === item.text.toLowerCase()
      )
    ) {
      return showModal(
        `Error! Note "${noteText}" is isn't in your collection!`
      );
    }
    this.items = this.items.filter(
      (item) => noteText.toLowerCase() !== item.text.toLowerCase()
    );
    return showModal(`Note "${noteText}" was deleted `);
  }
  updatePriority(noteText, newPriority) {
    if (
      !this.items.some(
        (item) => noteText.toLowerCase() === item.text.toLowerCase()
      )
    ) {
      return showModal(
        `Error! Note "${noteText}" is isn't in your collection!`
      );
    }
    const noteFinded = this.items.find(
      (item) => noteText.toLowerCase() === item.text.toLowerCase()
    );
    noteFinded.priority = newPriority;
    return showModal(`Priority of "${noteText}" was updated`);
  }
}

// додатковий інтерфейс для роботи з екземпляром класу
const addBtn = document.querySelector("[data-add]");
const removeBtn = document.querySelector("[data-remove]");
const updateBtn = document.querySelector("[data-update]");
const notes = document.querySelector(".notes");
const prioritySelect = document.querySelector(".priority-select");
const lowOption = document.querySelector("[data-option='low']");
const middleOption = document.querySelector("[data-option='middle'");
const hightOption = document.querySelector("[data-option='hight'");
const textInput = document.querySelector(".text-input");
let noteData = {};

const diary = new Notes();

lowOption.value = Notes.Priority.LOW;
middleOption.value = Notes.Priority.MIDDLE;
hightOption.value = Notes.Priority.HIGHT;

textInput.addEventListener("input", _.debounce(saveDataNote, 400));
prioritySelect.addEventListener("change", saveDataNote);

addBtn.addEventListener("click", onCreateNote);
removeBtn.addEventListener("click", onDeleteNote);
updateBtn.addEventListener("click", onUpdateNote);

function saveDataNote(event) {
  const inputName = event.target.name;
  noteData[inputName] = event.target.value;
  const selectName = prioritySelect.name;
  const selectValue = prioritySelect.value;
  noteData[selectName] = selectValue;
}

function onCreateNote() {
  const textInputValue = textInput.value;
  if (!textInputValue) {
    showModal("You can`t do this");
  } else {
    diary.addNote(noteData);
    const noteElement = `<li class ="note-item"><h3 class ="note-item-title"> Title: ${noteData.text}</h3><p class ="note-priority">Priority: ${noteData.priority}</p></li>`;
    notes.insertAdjacentHTML("beforeend", noteElement);
    textInput.value = "";
    noteData = {};
  }
}

function onDeleteNote() {
  if (!textInput.value) {
    return showModal("You can`t do this");
  }
  diary.removeNote(noteData.text);
  textInput.value = "";
  updateNotesCard(diary.items);
}

function onUpdateNote() {
  if (!textInput.value) {
    return showModal("You can`t do this");
  } else {
    diary.updatePriority(noteData.text, noteData.priority);
    textInput.value = "";
    updateNotesCard(diary.items);
  }
}

function isNoteInDiary(name) {
  if (!this.items.some((item) => name === item.text)) {
    return showModal(`Error! Note "${name}" is isn't in your collection!`);
  }
}

function updateNotesCard(array) {
  notes.innerHTML = "";
  const markup = array
    .map(
      (note) =>
        `<li class ="note-item"><h3 class ="note-item-title"> Title: ${note.text}</h3><p class ="note-priority">Priority: ${note.priority}</p></li>`
    )
    .join("");
  notes.insertAdjacentHTML("beforeend", markup);
}

function showModal(message) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            ${message}
        </p>
    </div>
`);
  instance.show();
}
