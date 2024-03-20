//!ДЗ
    //Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
    let number = 1;
    while(number <= 10) {
        console.log(number);
        number++
    }

    //Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.
    for(let start = 2; start <= 20; start++) {
        if(start % 2 === 0) {
            continue;
        }
        console.log(start);
    }

    //Вивести на екран таблицю множення числа 7 за допомогою циклу for.
    for(let multiply = 1; multiply <= 10; multiply++) {
        let result = 7 * multiply;
        console.log(`7 * ${multiply} = ${result}`);
    }

    //!Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
    let myNumbers = [1,2,3,4,5]
    let index = 0
    while(index < myNumbers.length) {
        console.log(myNumbers[index]);
        index++
    }
    //Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

    let array1 = [1,2,3,4,5,6,7,8,9,10]
    
    for(let index1 = 0; index1 < array1.length; index1++) {
        console.log(array1[index1]);
        
        if (array1[index1] === 7) {
            break;
        }
    }

    //Створити скрипт, який виводить на екран всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
    let n = 13
    for(let m = 1; m < n; m++) {
        console.log(m);
        if(m >= n) {
            break;
        }
    }

    // За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

    let g = 1
    while(g <= 20) {
        
        if( g % 3 === 0) {
            g++;
        continue;
        }
        console.log(g);
        g++
    }
    //