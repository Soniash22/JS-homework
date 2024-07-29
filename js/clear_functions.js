//Отримати масив імен всіх користувачів (поле name).

const getUserNames = users4 => {
  return users4.map(user => user.name);
};

const users4 = [
  {name: 'Moore Hensley'},
  {name: 'Sharlene Bush'},
  {name: 'Ross Vazquez'},
  {name: 'Elma Head'},
  {name: 'Carey Barr'},
  {name: 'Blackburn Dotson'},
  {name: 'Sheree Anthony'}
]

console.log(getUserNames(users4));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersWithEyeColor = (users5, color) => {
  return users5.filter(user => user.eyeColor === color);
};

const users5 = [
  {name: 'Moore Hensley', eyeColor: 'blue'},
  {name: 'Sharlene Bush', eyeColor: 'blue'},
  {name: 'Ross Vazquez', eyeColor: 'brown'},
  {name: 'Elma Head', eyeColor: 'brown'},
  {name: 'Carey Barr', eyeColor: 'blue'},
  ]
console.log(getUsersWithEyeColor(users5, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]


//Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users6, gender) => {
  return users6
  .filter(user => user.gender === gender)
    .map(user => user.name);
};

const users6 = [
  {name: 'Moore Hensley', gender: 'male'},
  {name: 'Sharlene Bush', gender: 'female'},
  {name: 'Ross Vazquez', gender: 'male'},
  {name: 'Elma Head', gender: 'female'},
  {name: 'Carey Barr', gender: 'male'},
  {name: 'Blackburn Dotson', gender: 'male'},
  ]
console.log(getUsersWithGender(users6, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users7 => {
  return users7.filter(user =>!user.isActive);
};
const users7 = [
  {name: 'Moore Hensley', isActive: false},
  {name: 'Sharlene Bush', isActive: true},
  {name: 'Ross Vazquez', isActive: true},
  {name: 'Elma Head', isActive: false},
  {name: 'Carey Barr', isActive: true},
  {name: 'Blackburn Dotson', isActive: false},
]
console.log(getInactiveUsers(users7)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]


//Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
  return users8.find(user => user.email === email);
  
};

const users8 = [
  {name: 'Moore Hensley', email: 'moorehensley@gmail.com'},
  {name: 'Sharlene Bush', email: 'sharlenebush@gmail.com'},
  {name: 'Ross Vazquez', email: 'rossvazquez@gmail.com'},
  {name: 'Elma Head', email: 'elmahead@omatom.com'},
  {name: 'Carey Barr', email: 'careybarr@gmail.com'},
  {name: 'Blackburn Dotson', email: 'blackburndotson@gmail.com'},
  {name: 'Sheree Anthony', email:'shereeanthony@kog.com' },
 ]

console.log(getUserWithEmail(users8, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users8, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}


//Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

const users9 = [
  {name: 'Moore Hensley', age: 31},
  {name: 'Sharlene Bush', age: 35},
  {name: 'Ross Vazquez', age: 20},
  {name: 'Elma Head', age: 29},
  {name: 'Carey Barr', age: 22},
  {name: 'Blackburn Dotson', age: 32},
  {name: 'Sheree Anthony', age: 40}]

console.log(getUsersWithAge(users9, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users9, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]



//Отримати загальну суму балансу (поле balance) всіх користувачів.

const users = [
  {name: 'sona', balance: 10000},
  {name: 'igor', balance: 10},
  {name: 'lera', balance: 10000},
  {name: 'anton', balance: 10500}
]
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
  };
  console.log(calculateTotalBalance(users));

 
  //Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
  const users1 = [
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sheree Anthony']
    },
    {
      name: 'Elma Head',
      friends: ['Sheree Anthony', 'Goldie Gentry']
    },
    {
      name: 'Sheree Anthony',
      friends: ['Briana Decker', 'Goldie Gentry']
    },
    
  ];

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users1, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users1, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users2 => 
users2
.sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

const users2 = [
  {name: 'Moore Hensley', friends: ['Carey Barr', 'Blackburn Dotson']},
  {name: 'Sharlene Bush', friends: ['Briana Decker', 'Sheree Anthony']},
  {name: 'Elma Head', friends: ['Sheree Anthony', 'Goldie Gentry','Briana Decker']},
  {name: 'Carey Barr', friends: ['Moore Hensley', 'Blackburn Dotson']},
  {name: 'Blackburn Dotson', friends: ['Moore Hensley', 'Carey Barr']},
  {name: 'Sheree Anthony', friends: ['Briana Decker', 'Goldie Gentry']},
  {name: 'Ross Vazquez', friends: ['Goldie Gentry']}
 ];

console.log(getNamesSortedByFriendsCount(users2));

//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
const getSortedUniqueSkills = users => {
  return users3
   .flatMap(user => user.skills)
   .filter((skill, index, self) => self.indexOf(skill) === index)
   .sort();
};

const users3 = [
  {name: 'sona', skills: ['adipisicing', 'amet', 'anim']},
  {name: 'igor', skills: ['commodo', 'culpa', 'elit']},
  {name: 'lera', skills: ['ex', 'ipsum']},
  {name: 'anton', skills: ['ad', 'minim', 'nostrud']},
  {name: 'katya', skills: ['ad', 'minim', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']} ]

console.log(getSortedUniqueSkills(users3));
