// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
const logItems6 = function(array) {
    for (let i = 0; i  < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems6(['Mango', 'Poly', 'Ajax'])

//Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function(message, pricePerWord) {
    let totalPrice = 0
    const words = message.split(' ');
    for (let i = 0; i < words.length; i++) {
        totalPrice += pricePerWord
    }
    return totalPrice
    
}
const message = "Hello world";
const pricePerWord = 10;
console.log(calculateEngravingPrice(message, pricePerWord));

//Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
const writeIn = "My name is Sonia Shkolenko";
const longestWord = findLongestWord(writeIn);
console.log(longestWord);

//Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно. Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді. Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
const formatString = function(string) {
    if (string.length <= 40) {
        return string;
    }
    else {
        return string.slice(0, 40) + '...';
    }
}
const stringMy = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

console.log(formatString(stringMy));

//Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function(string) {
    const spamWords = ['spam','sale'];
    const words = string.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        if (spamWords.includes(words[i])) {
            return true;
        }
    }
    return false;
}

const messageCheck = 'Buy now, sale 10% off!';

console.log(checkForSpam(messageCheck));

//Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

let numbers = [];
let input;
let total = 0;

while (true) {
    input = prompt('Введіть число або натисніть Cancel');
    if (input === null) {
        break;
    }
    const number = Number(input);
    if (!isNaN(number)) {
        numbers.push(number);
    }
}

if (numbers.length > 0) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній.");
}