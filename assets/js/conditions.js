// task #1
// const isDay = false;
// let color = null;
// let backgroundColor = null;

// if (isDay) {
//   color = "grey";
//   backgroundColor = "yellow";
//   console.log(color, backgroundColor);
// } else {
//   color = "white";
//   backgroundColor = "blue";
//   console.log(color, backgroundColor);
// }
// if (isDay) {
//   document.write(
//     `<p style="color:${color};background-color:${backgroundColor}">Світла тема</p>`
//   );
// } else {
//   document.write(
//     `<p style="color:${color};background-color:${backgroundColor}">Темна тема</p>`
//   );
// }

//task #2

// const isOnline = false;

// if (!isOnline) {
//   alert(
//     "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
//   );
// }

//task #3

// let sum = +prompt("Input sum: 0");
// const amount1 = 500;
// const amount2 = 800;
// const discount1 = 0.03;
// const discount2 = 0.05;

// if (sum > amount1 && sum <= amount2) {
//   let sumdiscount1 = sum * discount1;
//   let totalAmount = sum - sumdiscount1;
//   console.log(totalAmount);
// } else if (sum > amount2) {
//   let sumdiscount2 = sum * discount2;
//   let totalAmount = sum - sumdiscount2;
//   console.log(totalAmount);
// } else {
//   console.log(sum);
// }

// switch
//task#1
// let numberDay = +prompt("Input number: 0");
// let day = null;
// switch (day) {
//   case 1:
//     alert("Понеділок");
//     break;
//   case 2:
//     alert("Вівторок");
//     break;
//   case 3:
//     alert("Середа");
//     break;
//   case 4:
//     alert("Четвер");
//     break;
//   case 5:
//     alert("П'ятниця");
//     break;
//   case 6:
//     alert("Субота");
//     break;
//   case 7:
//     alert("Неділя");
//     break;
//   default:
//     alert("Дня з таким номером не існує");
// }

//task#2

// let day = +prompt("Введіть число від 1 до 31");
// let dekada;
// switch (dekada) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     alert("Перша декада місяця");
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//   case 20:
//     alert("Друга декада місяця");
//     break;
//   case 21:
//   case 22:
//   case 23:
//   case 24:
//   case 25:
//   case 26:
//   case 27:
//   case 28:
//   case 29:
//   case 30:
//   case 31:
//     alert("Третя декада місяця");
//     break;
//   default:
//     alert("Помилка введення числа місяця");
// }
