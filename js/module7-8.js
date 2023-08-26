// task 1
// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.querySelector("#productTable");
// const details = document.querySelector("#productDetails");

// table.addEventListener("click", clickOn);

// function clickOn(event) {
//   if (event.target.nodeName !== "TD") return;
//   const parent = event.target.parentNode;
//   const product = parent.firstElementChild.textContent;
//   const price = parent.lastElementChild.textContent;
//   console.log(price);
//   details.innerHTML = `Ви вибрали ${product} за ${price}`;
// }

// task 2

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const btnList = document.querySelector(".statList");
const btnResult = document.querySelector("#resultButton");
const result = document.querySelector("#resultSection");

let total = 0;
let stat = {
}

btnList.addEventListener('click', btnSum)

function btnSum(event) {
  if (event.target.nodeName !== "BUTTON") return
  const num = Number(event.target.dataset.number);
  total += num
  const key = event.target.textContent;
  if (stat[key]) {
    stat[key] +=1
  } else {
    stat[key] = 1
  }
  console.log(stat)
}

btnResult.addEventListener('click', showResult)

function showResult() {
  result.innerHTML = ``;
  if (total === 0) return
 
  let markup = `Загальна сумма ${total}`
  for (const [key, value] of Object.entries(stat)) {
    markup += `<br> ${key} була натиснута ${value} разів`
  }
  result.innerHTML = markup
  stat = {};
  total = 0;

}

