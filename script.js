"use strict";

//функция для случайного числа
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//бот загадывает число от 1 до 100
const botNumber = getRandomInt(100) + 1;
console.log("botNumber: ", botNumber);

//функция для сравнения числа бота и числа пользователя
function chechNumber(botNumber, userNumber) {
  if (userNumber > botNumber) {
    alert("Загаданное число меньше");
    start();
  } else if (userNumber < botNumber) {
    alert("Загаданное число больше");
    start();
  } else {
    alert("Поздравляю, Вы угадали!!!");
    return;
  }
}

//функция для обработки условий игры
let start = function () {
  //объявляем переменную для чисела пользователя
  let userNumber = prompt("Введи число от 1 до 100");

  //условие для отмены игры
  if (userNumber === null) {
    alert("Игра окончена!");
    return;
  }

  //делаем из строки число
  userNumber = parseFloat(userNumber);

  //если не получилось сделать строку, ввыодим сообщение и запрашиваем данные заново
  if (isNaN(userNumber)) {
    alert("Введите число");
    start();
  }

  //вызываем функцию сравнения чисел
  chechNumber(botNumber, userNumber);
};
//игра начинается!!!
start();
