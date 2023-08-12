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

const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomither(max) {
  return Math.floor(Math.random() * max);
}

const figure = document.createElement("div");
onChangeStyleFigure();
document.body.appendChild(figure);

function onChangeStyleFigure() {
  figure.style.cssText = forms[randomither(forms.length)];
  figure.style.backgroundColor = getRandomHexColor();
  figure.style.position = "absolute";
  figure.style.top = `${randomither(100)}%`;
  figure.style.left = `${randomither(100)}%`;
}

figure.addEventListener("click", onChangeStyleFigure);
