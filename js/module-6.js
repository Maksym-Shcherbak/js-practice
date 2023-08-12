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
