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

    const maxTry = 3;
    let currentTry = 0;

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

        //проверка оставшихся попыток
        if (currentTry === maxTry) {
            let oneMoreTime = confirm("Попытки закончились, хотите сыграть еще?");
            if (oneMoreTime) {
                start();
            } else {
                return;
            }
        }

        // сравнение числа бота и числа пользователя

        if (userNumber > botNumber) {
            alert(`Загаданное число меньше, осталось попыток ${maxTry - currentTry}`);
            currentTry++;
            enterData();
        } else if (userNumber < botNumber) {
            alert(`Загаданное число больше, осталось попыток ${maxTry - currentTry}`);
            currentTry++;
            enterData();
        } else {
            let oneMore = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            if (oneMore) {
                start();
            } else {
                return;
            }
        }

    }
    enterData();
};
//игра начинается!!!
start();
