"use strict";

//функция для обработки условий игры
let start = function () {
  //функция для случайного числа
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //бот загадывает число от 1 до 100
  const botNumber = getRandomInt(100) + 1;
  console.log("botNumber: ", botNumber);

  //функция ввода данных пользователя
  function enterData(userNumber) {
    //объявляем переменную для чисела пользователя
    userNumber = prompt("Введи число от 1 до 100");

    //условие для отмены игры
    if (userNumber === null) {
      alert("Игра окончена!");
      return;
    }
    //функция проверки данных пользователя
    function checkData() {
      //делаем из строки число
      userNumber = parseFloat(userNumber);

      //если не получилось сделать строку, ввыодим сообщение и запрашиваем данные заново
      if (isNaN(userNumber)) {
        alert("Введите число");
        enterData();
      }
    }

    checkData();

    // сравнение числа бота и числа пользователя

    if (userNumber > botNumber) {
      alert(`Загаданное число меньше`);
      enterData();
    } else if (userNumber < botNumber) {
      alert(`Загаданное число больше`);
      enterData();
    } else {
      alert("Поздравляю, Вы угадали!!!");
      return;
    }
  }
  enterData();
};
//игра начинается!!!
start();
