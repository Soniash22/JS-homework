//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: 'Sona Shkolenko',
  accountNumber: '1234567890',
  balance: 0,

  deposit(amount) {
    this.balance += amount;
    alert(`Поповнено рахунку на ${amount} гривень. Новий баланс: ${this.balance}`);
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      alert(`Знято ${amount} гривень. Новий баланс: ${this.balance}`);
    } else {
      alert('Недостатня сума на рахунку');
    }
  }
};
function deposit() {
  const amount = parseFloat(document.getElementById('amount').value);
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(amount);
  } else {
    alert('Будь ласка, введіть коректну суму для поповнення');
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amount').value);
  if (!isNaN(amount) && amount > 0) {
    bankAccount.withdraw(amount);
  } else {
    alert('Будь ласка, введіть коректну суму для зняття');
  }
}

//Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,

  isBelowZero() {
    return this.temperature < 0;
  }
};

function checkTemperature() {
  const temperatureInput = document.getElementById('temperature').value;
  const temperature = parseFloat(temperatureInput);

  if (!isNaN(temperature)) {
    weather.temperature = temperature;

    if (weather.isBelowZero()) {
      alert('Температура нижче 0 градусів Цельсія');
    } else {
      alert('Температура вище або рівна 0 градусів Цельсія');
    }
  } else {
    alert('Будь ласка, введіть коректну температуру');
  }
}
//Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
  name: 'sona',
  email: 'sonashkolenko22@gmail.com',
  password: '12345678',

  login() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    if (this.email === emailInput && this.password === passwordInput) {
      alert('Ви війшли в акаунт');
    } else {
      alert('Неправильний email або пароль');
    }
  }
};
function login() {
  user.login();
}
//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = {
  title: 'Anyone but You',
  director: 'Will Gluck',
  year: 2023,
  rating: 8.1,

  isHighRating() {
    return this.rating > 8;
  }
};
function displayMovieInfo() {
  const titleElement = document.getElementById('title');
  const directorElement = document.getElementById('director');
  const yearElement = document.getElementById('year');
  const ratingElement = document.getElementById('rating');

  titleElement.textContent = movie.title;
  directorElement.textContent = movie.director;
  yearElement.textContent = movie.year;
  ratingElement.textContent = movie.rating;

  if (movie.isHighRating()) {
    titleElement.classList.add('high-rating');
    titleElement.style.color = 'green';
  }
}
displayMovieInfo()


//! Об’єкти. Перебір об'єкту

// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user1 = {
  name: 'Sona',
  age: 15,
  hobby: 'studying',
  premium: true
}

user1.mood = 'happy';
user1.hobby = 'skydiving'
user1.premium = false

for (const key of Object.keys(user1)) {
  console.log(`${key}: ${user1[key]}`);
}

//деструктуризація об'єкту
// const {name,age,hobby,premium,mood} = user1
// console.log(name,age,hobby,premium, mood);

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps(user1));

//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employees = {
  Sona: 28,
  Max: 21,
  Andrii: 30,
  Sasha: 35,
  Katya: 31
}
function findBestEmployee(employees) {
  let bestEmployee = '';
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }

  return bestEmployee;
}
console.log(findBestEmployee(employees));

//деструктуризація об’єкту

// const { Sona, Max, Andrii, Sasha, Katya } = employees;
// console.log(Sona, Max, Andrii, Sasha, Katya);


//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const employees1 = {
  Sona: 75000,
  Max: 68000,
  Andrii: 80000,
  Sasha: 55000,
  Katya: 70000
}

function countTotalSalary(employees1) {
  let totalSalary = 0;
  
  for (const name in employees1) {
    totalSalary += employees1[name];
  }
  
  return totalSalary; 

}

console.log(countTotalSalary(employees1));

//деструктуризація об’єкту

const {Sona, Max, Andrii, Sasha, Katya} = employees1
console.log(Sona, Max, Andrii, Sasha, Katya);

//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const arr = [
  { name: 'Apple', price: 10, color: 'green' },
  { name: 'Banana', price: 20, color: 'yellow' },
  { name: 'Pear', price: 10, collor: 'yellow' },
  { name: 'Orange', price: 15, color: 'orange' },
  { name: 'Grape', price: 25, color: 'purple' },
  { name: 'Peach', price: 30, color: 'orange' }
];

function getAllPropValues(arr, prop) {
  const values = [];
  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}

console.log(getAllPropValues(arr, 'name')); 
console.log(getAllPropValues(arr, 'price')); 
console.log(getAllPropValues(arr, 'color')); 

//деструктуризація об’єкту

// const [firstArr] = arr
// const {name, price,color} = firstArr
// console.log(name);
// console.log(price); 
// console.log(color);


// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const allProducts = [
  { name: 'Apple', price: 10, quantity: 11 },
  { name: 'Banana', price: 20, quantity: 4 },
  { name: 'Pear', price: 10, quantity: 5 },
  { name: 'Orange', price: 15, quantity: 3},
  { name: 'Grape', price: 25, quantity: 4 },
  { name: 'Peach', price: 30, quantity: 7 }
];

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
}
console.log(calculateTotalPrice(allProducts, 'Apple'));
console.log(calculateTotalPrice(allProducts, 'Banana'));
console.log(calculateTotalPrice(allProducts, 'Pear'));
console.log(calculateTotalPrice(allProducts, 'Orange'));
console.log(calculateTotalPrice(allProducts, 'Grape'));
console.log(calculateTotalPrice(allProducts, 'Peach'));

//Деструктуризація об'єкту
const [firstProduct] = allProducts
const {name,price,quantity} = firstProduct
console.log(name);
console.log(price); 
console.log(quantity);

// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    
      return {
        id: this.transactions.length + 1, 
        type: type,
        amount: amount,
      };
    
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостатньо коштів для зняття такої суми.');
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id

   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return null; 
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;
  for (const transaction of this.transactions) {
    if (transaction.type === type) {
      total += transaction.amount;
    }
  }
  return total;
  },
};
account.deposit(1000);
console.log(account.getBalance());
account.withdraw(990);
console.log(account.getBalance()); 

account.withdraw(1000); // Недостатньо коштів для зняття такої суми.
