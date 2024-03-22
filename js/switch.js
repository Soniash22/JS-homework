//!Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const variants = document.getElementById("choose");
const coffee = document.getElementById("coffee");
const tea = document.getElementById("tea");
const juice = document.getElementById("juice");
const message = document.querySelector(".message");

variants.addEventListener("change", (event) => {
  switch (variants.value) {
    case "coffee":
      message.textContent = "ви вибрали каву";

      break;
    case "tea":
      message.textContent = "ви вибрали чай";

      break;
    case "juice":
      message.textContent = "ви вибрали сік";
      break;
    default:
      alert("ви не вибрали напій");
      break;
  }
});

//!Створити розмітку  з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

const input = document.getElementById("input");
const buttonCheck = document.getElementById("btn");

buttonCheck.addEventListener("click", () => {
  const check = input.value.toLowerCase();

  switch (check) {
    case "monday":
      alert("робочий день");
      break;
    case "tuesday":
      alert("робочий день");
      break;
    case "wednesday":
      alert("робочий день");
      break;
    case "thursday":
      alert("робочий день");
      break;
    case "friday":
      alert("робочий день");
      break;
    case "saturday":
      alert("вихідний");
      break;
    case "sunday":
      alert("вихідний");
      break;
    default:
      alert("введи назву неділі");
      break;
  }
});

//!Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

const month = document.getElementById("month");
const buttonMonth = document.getElementById("check-month");

buttonMonth.addEventListener("click", () => {
  const season = month.value;
  switch (season) {
    case "12":
      alert("зима");
      break;
    case "1":
    case "01":
      alert("зима");
      break;
    case "2":
    case "02":
      alert("зима");
      break;
    case "3":
    case "03":
      alert("весна");
      break;
    case "4":
    case "04":
      alert("весна");
      break;
    case "5":
    case "05":
      alert("весна");
      break;
    case "6":
    case "06":
      alert("літо");
      break;
    case "7":
    case "07":
      alert("літо");
      break;
    case "8":
    case "08":
      alert("літо");
      break;

    case "9":
    case "09":
      alert("осінь");
      break;
    case "10":
      alert("осінь");
      break;
    case "11":
      alert("осінь");
      break;
    default:
      alert("оберіть місяць!");
      break;
  }
});

//! Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.

const monthInput = document.getElementById("days_in_month");
const buttonDays = document.getElementById("check-days");

buttonDays.addEventListener('click', () => {
  const daysMonth = monthInput.value

  switch(daysMonth) {
    case "12":
      alert("31");
      break;
    case "1":
    case "01":
      alert("31");
      break;
    case "2":
    case "02":
      alert("28(29)");
      break;
    case "3":
    case "03":
      alert("31");
      break;
    case "4":
    case "04":
      alert("30");
      break;
    case "5":
    case "05":
      alert("31");
      break;
    case "6":
    case "06":
      alert("30");
      break;
    case "7":
    case "07":
      alert("31");
      break;
    case "8":
    case "08":
      alert("31");
      break;

    case "9":
    case "09":
      alert("30");
      break;
    case "10":
      alert("31");
      break;
    case "11":
      alert("30");
      break;
    default:
      alert("оберіть місяць!");
      break;
  }
});

//! Створити розмітку  з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" - "стоп", якщо "зелений" - "йти", якщо "жовтий" - "чекати".

const colorInput = document.getElementById('color')
const btnColor = document.getElementById('check-colors')
btnColor.addEventListener('click', () => {
  const viewColor = colorInput.value;
  switch(viewColor) {
    case "червоний":
      alert('стоп')
      break;
    case "зелений":
      alert('йти');
      break;
      case "жовтий":
        alert('чекати')
        break;
        default:
          case "":
            alert("Введіть колір")
            break;
  }
})

//! Створити розмітку  з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.

const operations = document.getElementById('operations')

const count = document.querySelector('.count')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
let showResult = document.querySelector('.result')
let result;

count.addEventListener('click', (event) => {
  switch (operations.value) {
    case 'plus':
      result = parseFloat(input1.value) + parseFloat(input2.value);
      break;

      case 'minus':
      result =  parseFloat(input1.value) - parseFloat(input2.value);
      break;

      case 'multiply':
      result =  parseFloat(input1.value) * parseFloat(input2.value);
      break;

      case 'divide':
        if (parseFloat(input2.value) === 0) {
          alert("Ділення на нуль неможливе!");
          return;
        }
        result = parseFloat(input1.value) / parseFloat(input2.value);

      break;
      default:
        alert('введіть числа')
        return;
  }
  showResult.textContent = `Результат: ${result}`
  })

 
 

//Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
// 'Токої кількості зірок немає'

// const stars = +prompt('choose hotel: 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$');

// switch(stars) {
//     case 1:
//         alert('20$');
//         break;
//         case 2:
//             alert('30$');
//             break;
//             case 3:
//                 alert("50$");
//                 break;
//                 case 4:
//                     alert("70$");
//                     break;
//                     case 5:
//                         alert("120$")
//                         break;
//                         default:
//                         alert('Тaкої кількості зірок немає');
//                         break;
// }

//!Змінна lang може приймати 4 значення: 'ua', 'en', 'sp', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

// const lang = prompt("language:");
// let monthUser = 1;

// switch (lang) {
//   case "ua":
//     switch (monthUser) {
//       case 3:
//         alert("Березень");
//         break;
//         case 4:
//         alert("Квітень");
//         break;
//         case 5:
//         alert("Травень");
//         break;
//     }
//     break;
//   case "en":
//     switch (monthUser) {
//       case 1:
//         alert("March");
//         break;
//     }
//     break;

//   case "sp":
//     switch (monthUser) {
//       case 1:
//         alert("Marzo");
//         break;
//     }
//     break;

//   case "fr":
//     switch (monthUser) {
//       case 1:
//         alert("Mars");
//         break;
//     }
//     break;
//     default:
//       alert('')
// }

// break;
// case 'en':
//     alert('January');
//     break;
//     case 'sp':
//         alert('enero');
//         break;
//         case 'fr':
