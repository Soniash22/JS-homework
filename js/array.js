'use strict'
//! Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let arr = [5,13,18];
arr[1] = 10;
console.log(arr[1]);

//!Створити масив із трьох рядків. Додати до масиву ще одну рядків. 
let fruits = ['pineapple', 'peach', 'mango'];
console.log(fruits);
fruits[3] = 'apple';
console.log(fruits);

//! Створити скрипт який поверне суму всіх чисел в масиві.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = 0
for(i = 0; i < arr1.length; i++) {
    total += arr1[i]

}
console.log(total);

//!Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let array = [5, 6, 7, 8, 9]
for(let i of array) {
    console.log(i);
}

//!Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
let strArr = ['i', 'am', 'student', 'of', 'GoIteens', 'course']
for(let i of strArr) {
    if(i.length > 5) {
        console.log(i);
        console.log(i.length);
    }
}

//!Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let numArr = [12, 34, 56, 2, 43, 11, 71, 18, 9, 22]
let bigNumber = numArr[0]

for(let i = 1; i < numArr.length; i++) {
    if(numArr[i] > bigNumber) {
     bigNumber = numArr[i]   
    }
}
console.log(bigNumber);

//!Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let evenArr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let i = 0; i < evenArr.length; i++) {
    if(evenArr[i] % 2 === 0) {
        console.log(evenArr[i]);
    }
}