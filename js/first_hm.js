// 'use strict'
//!1 ДЗ
// let age = 14;
// console.log(age);

// const name = 'Sonia';
// console.log(name);

// const isStudent = true;
// console.log(isStudent);

// const myString = "v mene nemae ulublenoi zitati";
// console.log(myString);

// const myNumber = 13;
// const notMyNumber = 10;
// console.log(myNumber+notMyNumber);

// const myNull = null;
// console.log(myNull);




//!2 ДЗ
// const question = prompt("Введіть своє ім'я","");
// console.log(question);
// const answer = alert("привіт," + question);
// console.log(answer);

// const question = confirm('')
// if (question) {
//     alert("Дію підтвержено");
// }
// else {
//     alert("Дію скасовано");
// }

// const myWarning = alert("Дія небезпечна");
// console.log(myWarning);
// const myConfirm = confirm("Підтвердіть дію");
// if (myConfirm) {
//     alert("Дякую за підтвердження!");
// }
// else {
//     alert("Дію відмінено!");
// }





//!3 ДЗ

//let myRandom = (1-15);
// console.log((Math.random() * (15 - 1) + 1).toFixed(1));

// const firstNumber = +prompt("Введіть перше число", "" );
// console.log(typeof firstNumber);
// const secondNumber = +prompt("Введіть друге число", "" );

// const myResult =  firstNumber + secondNumber;

// alert(myResult);

// const Celsius = "0";
// const Fahrenheit = ((Celsius * 9/5) + 32);
// console.log(Fahrenheit,"°");

// let month = "31";
// let hours = (month * 24);
// let minutes = (hours * 60);
// console.log(hours); 
// console.log(minutes);

// const healthLvl = "100%";
// const energyLvl = "100%";
// const damageHealth = "30%"
// const damageEnergy = "20%";

// if(healthLvl) {
//     result = "Good job";
// }
// else {
//     result(healthLvl - damageHealth);
// }

// console.log(result);

// if(energyLvl) {
//     resultEn = "Good job";
// }
// else {
//    resultEn(energyLvl - damageEnergy);
// }
// console.log(resultEn);

// let priceShop = 950;
// let percentShop = 10;
// let countShop = (percentShop/100);
// console.log(countShop);
// let resultShop = (priceShop*countShop);
// console.log(resultShop);
// console.log(priceShop - resultShop ,"%");

// let randomNumber = 5.7;
// console.log(Math.floor(randomNumber));

// let numberFloat = "34.35336hg12";
// numberFloat = Number.parseFloat(numberFloat);
// console.log(numberFloat);

// let wholeInteger = "56.889fgfhh455";
// wholeInteger = Number.parseInt(wholeInteger);
// console.log(wholeInteger);

// let squareNum = Math.sqrt(64);
// console.log(squareNum);

// let numberIn = 42;
// let stringNum = "38";
// stringNum = Number.parseInt(stringNum);
// console.log(typeof stringNum);

// console.log(typeof stringNum.toString());





let result = 5+5+'5';
console.log(typeof result);

//Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.

let email = 'sonashkolenko22@gmail.com';
console.log(email.includes ('@'));
console.log(email.length);

// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

let first = 'My ';
let second = 'name ';
let third = 'is ';
let fullName = (first + second + third);
console.log(fullName + 'Viktor');

//Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

// let userName = 'Alex';
// let payment = 1000;

// let str = `Дякую, ${userName}! До сплати ${payment} гривень`;
// alert(str);
// console.log(str);