// TASK 1
// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ol");
// const addBtn = document.createElement("button");
// const removeBtn = document.createElement("button");
// const input = document.createElement("input");

// addBtn.textContent = "Add";
// removeBtn.textContent = "Remove";

// document.body.append(input, addBtn, removeBtn, list);

// addBtn.addEventListener("click", onCreateItem);
// removeBtn.addEventListener("click", onRemoveItem);

// function onCreateItem() {
//   const inputValue = input.value.trim();
//   if (!inputValue) {
//     return alert("Заповніть поле");
//   }
//   const listItem = document.createElement("li");
//   listItem.textContent = inputValue;
//   list.appendChild(listItem);
//   //   if (list.children.length % 2 === 0) {
//   //     listItem.style.backgroundColor = "yellow";
//   //   } else {
//   //     listItem.style.backgroundColor = "blue";
//   //     }
//   listItem.style.backgroundColor =
//     list.children.length % 2 === 0 ? "yellow" : "blue";

//   input.value = "";
// }

// function onRemoveItem() {
//   const lastItem = list.lastChild;
//   if (!lastItem) return;
//   lastItem.remove();
// }

//TASK 2
// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const figure = document.createElement("div");
// onChangeStyleFigure();
// document.body.appendChild(figure);

// function onChangeStyleFigure() {
//   figure.style.cssText = forms[randomither(forms.length)];
//   figure.style.backgroundColor = getRandomHexColor();
//   figure.style.position = "absolute";
//   figure.style.top = `${randomither(100)}%`;
//   figure.style.left = `${randomither(100)}%`;
// }

// figure.addEventListener("click", onChangeStyleFigure);

//TASK 3
// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// const figure = document.createElement("div");
// figure.style.backgroundColor = "red";
// let dimension = 50;
// figure.style.width = `${dimension}px`;
// figure.style.height = `${dimension}px`;

// const increaseBtn = document.createElement("button");
// const decreaseBtn = document.createElement("button");

// increaseBtn.textContent = "Збільшити";
// decreaseBtn.textContent = "Зменшити";
// document.body.append(increaseBtn, decreaseBtn, figure);

// const markup = `<button type="button" class="increase-btn" >Збільшити</button><button type="button" class="decrease-btn" >Зменшити</button><div class="figure" style="background:red; width: ${dimension}px; height:${dimension}px"></div>`;
// document.body.insertAdjacentHTML("afterbegin", markup);
// const increaseBtn = document.querySelector(".increase-btn");
// const decreaseBtn = document.querySelector(".decrease-btn");
// const figure = document.querySelector(".figure");
// function onIncrease() {
//   dimension += 10;
//   figure.style.width = `${dimension}px`;
//   figure.style.height = `${dimension}px`;
//   if (dimension > 10) {
//     decreaseBtn.disabled = false;
//   }
// }
// function onDecrease() {
//   dimension -= 10;
//   figure.style.width = `${dimension}px`;
//   figure.style.height = `${dimension}px`;
//   if (dimension === 10) {
//     decreaseBtn.disabled = true;
//   }
// }

// increaseBtn.addEventListener("click", onIncrease);
// decreaseBtn.addEventListener("click", onDecrease);

//TASK 4

// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
// const alertButton = document.querySelector("#alertButton");
// const alertInput = document.querySelector("#alertInput");

// alertButton.addEventListener("click", onSubmitShow);
// function onSubmitShow() {
//   const submitValue = alertInput.value.trim();
//   if (!submitValue) return;
//   alert(submitValue);
//   alertInput.value = "";
// }

// Task 5
/*
// Завдання 3
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// */
// const input = document.querySelector("#passwordInput");
// const button = document.querySelector("#passwordButton");

// button.addEventListener("click", onButtonClick);

// function onButtonClick() {
//   if (button.textContent === "Приховати") {
//     button.textContent = "Розкрити";
//     input.style.color = "transparent";
//   } else {
//     button.textContent = "Приховати";
//     input.style.color = "inherit";
//   }
// }
// TASK 6
// Завдання 6
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази
// const listItems = document.querySelectorAll(".listItem");
// const button = document.querySelector("#double");

// button.addEventListener("click", onButtonClick);

// function onButtonClick() {
//   listItems.forEach((item) => (item.textContent *= 2));
// }

// TASK 7
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// const liItems = document.querySelectorAll(".gridItem");

// liItems.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     item.classList.add("hide");
//   });
//   item.addEventListener("mouseleave", () => {
//     item.classList.remove("hide");
//   })
// })

// TASK 8
// Завдання 14
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const divEl = document.querySelector(".eventThumb");
// document.addEventListener("keydown", (event) => {
//   const markup = `<ul class="eventList"><li class="eventKey">Key:${event.key}</li><li class="eventCode">Code:${event.code}</li></ul>`; 

//   divEl.insertAdjacentHTML("afterbegin", markup);
// }
// )

//TASK 9
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення на
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

// const text = document.querySelector(".text");
// const inputFrom = document.querySelector("#from");
// const inputTo = document.querySelector("#to");
// const replaceButton = document.querySelector("#replaceButton");

// replaceButton.addEventListener('click', replaceText);

// function replaceText() {
//   if (!inputFrom.value || !inputTo.value) {
//     return alert("Треба заповнити усі рядки!");
//   } 
//   text.textContent = text.textContent.replaceAll(inputFrom.value, inputTo.value);
//   inputFrom.value = "";
//   inputTo.value = ""; 

// }
