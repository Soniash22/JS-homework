//1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

const btnHello = document.getElementById('hello-btn');

btnHello.addEventListener('click', () => {
  console.log('Hello World!');
});

//2. Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2

const randomNumber = Math.floor(Math.random() * 100) + 1;
        
        function checkGuess() {
            const userGuess = Number(document.getElementById('guessField').value);
            const guessResult = document.getElementById('guessResult');
            
            if (userGuess === randomNumber) {
                guessResult.textContent = 'Вітаю! Ви вгадали число!';
                guessResult.style.color = 'green';
            } else if (userGuess > randomNumber) {
                guessResult.textContent = 'Ваше число занадто велике. Спробуйте ще раз.';
                guessResult.style.color = 'red';
            } else if (userGuess < randomNumber) {
                guessResult.textContent = 'Ваше число занадто маленьке. Спробуйте ще раз.';
                guessResult.style.color = 'red';
            } else {
                guessResult.textContent = 'Будь ласка, введіть коректне число.';
                guessResult.style.color = 'red';
            }
        }
        // 3. Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.


        let clickCount = 0;
        
        document.body.addEventListener('click', () => {
            clickCount += 1;
            document.getElementById('clickCount').textContent = `${clickCount} разів`;
        });
        // 4. Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
        const applyCallbackToEachElement = (arr,callback) => {
            const result = [];
            for (let i = 0; i < arr.length; i++) {
                result.push(callback(arr[i]));
            }
            return result;
        }

        const arr = [1, 2, 3, 4, 5];

const squareCallback = function(number) {
    return number * number;
};

const result = applyCallbackToEachElement(arr, squareCallback);

console.log(result);

//5. Розрахунок дисконтної ціни

// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * (discount / 100));
    return callback(discountedPrice);
}
const showDiscountedPrice = (discountedPrice) => {
    console.log(`Discounted price: ${discountedPrice}`);
};
calculateDiscountedPrice(100,10, showDiscountedPrice)