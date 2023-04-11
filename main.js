// • • • • • JavaScript необходимые основы для начинающих • • • • •
// • • • • • • • • • • • • практический курс • • • • • • • • • • •
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/
// =================== 1. Подключение ====================================================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

// let we can change let
let userName = 'Mark';
userName = 'Egor';
console.log(userName)

// const we can not change const
const yearOfBirth = 1990;
console.log(yearOfBirth)

// 2. Variables and types=================================================================
let names, age;
names = 'Tom';
console.log(names)

{
    var name = 'bob'
    let age = 25
    const gender = 'male'
    console.log(name, age, gender)
}

console.log(typeof name)

// BigInt
console.log(Number.MAX_SAFE_INTEGER)
console.log(99999999999999999999999999999999)
console.log(999999999999999999999999n)

/* 3. операторы сравнения comparison operators============================================
<, >, <=, >=, 
== нестрогое сравнение     equal 
=== строгое сравнение    strict equal
!= нестрогое неравенство    not equal
!== строгое неравенство    strict not equal
*/
console.log('5' == 5); // true
console.log('5' === 5); // false

console.log(10 > 5); // true
console.log(20 > 80); // false
let result = 10 > 5;
console.log(result); // true

// = операция присвоения
let number = 5;
if (number = 10) {
    console.log(11111);
}

/* 4.=====================================================================================
if (condition) {
    // code if true
} else {
    // code if not true
}
*/

const time = 11;

if (time < 12) {
    console.log('Good morning!')
} else if (time >= 12 && time < 18) {
    console.log('Good afternoon!')
} else {
    console.log('Good evening!')
}

/* 4.a
&&  логическое И
||  логическое ИЛИ
!true логическое НЕ
*/

// 4.b тернарный оператор
// (condition) ? (condition is true) : (conditon is not true)
10 > 12 ? console.log("true") : console.log('you win!')

let greeting;
let time1 = 14
time1 < 12 ? greeting = 'Good morning!' : greeting = 'Good afternoon!'
console.log(greeting)

sayHello()

let time2 = 10
greeting1 = time2 < 12 ? greeting = 'Good morning!' : greeting = 'Good afternoon!'
console.log(greeting1)

// 5.concatenation of strings============================================================= 
let hello = 'Hello!'
let howAreYou = 'How are you?'
let sayHi = hello + ' ' + howAreYou
console.log(userName)
console.log(hello + ' ' + userName + ', ' + howAreYou)
// and template literals
console.log(`${hello} ${userName}, ${howAreYou}`)

// 6.functions============================================================================
// DRY = do not repeat yourself
// function declaration:
sayHello()
// function declaration we CAN call before (also after) it was writen
function sayHello() {
    console.log('Hello, dear user!')
}
// functional expression - we can NOT call before, we should call it AFTER 
let sayGoodBuy = function () {
    console.log('Buy!')
}
sayGoodBuy()

// 6.1 parameters and arguments for functions
function sayHello1(userName1) {
    console.log(`Hello, ${userName1}! How are you?`)
}
sayHello1('Dik')
sayHello1('Diana')
sayHello1('Karin')

// 6.2 return
function summ(a, b) {
    console.log('start')
    const result = a + b
    return result
    console.log('finish')
}
let res = summ(58, 6)
console.log(res)

// 6.3 function as an argument
function summ1(c, d) {
    return c * d
}
console.log(summ1(55, 6))
console.log(typeof result)

const result1 = summ(summ(15, 15), summ(20, 20))
console.log(result1)

function doSome(func) {
    let x = 10
    let y = 15
    let result = func(x, y)
    console.log(result)
}
doSome(summ)
doSome(summ1);

// 6.4 self-calling (self-invoking) function IIFE (Immediately Invoked Function Expressions)
(function () {
    console.log('Hello!');
})();

(function (a, b) {
    console.log(a)
    console.log(b)
    console.log(a + b)
})(5, 6);

let res1 = (function (a, b) {
    return a + b
})(10, 8)
console.log(res1)

/* 6.5 arrow function - стрелочная ф-ция не имеет своего контекста, ссылается на тот, в котором
она запущена*/
// вариант написания ES5
function sayHello2(nick) {
    console.log(`Hello, ${nick}! How are you?`)
}
sayHello2('bob')
// вариант написания стрелочная ф-ция - ES6
const sayHello3 = (nick) => {
    console.log(`Hello, ${nick}! How are you?`)
}
sayHello3('bobs')
// вариант написания стрелочная ф-ция в одну строку - ES6
const sayHello4 = (nick) => console.log(`Hello, ${nick}! How are you?`)
sayHello4('mark')

// вариант написания ES5
function summ2(r, t) {
    const result2 = r + t
    console.log(r)
    console.log(t)
    console.log(r + t)
    console.log(result2)
}
summ2(2, 4)
console.log(summ2(8, 4))
// вариант написания стрелочная ф-ция - ES6
const summ4 = (s, l) => {
    return s + l
}
console.log(summ4(8, 8))
// вариант написания стрелочная ф-ция в одну строку - ES6
const summ3 = (g, h) => g + h
summ3(6, 3)
console.log(summ3(1, 2))

// 7. Arroy===============================================================================
const autoBrand1 = 'Audi'
const autoBrand2 = 'BMW'
const autoBrand3 = 'Mazda'
const autoBrand4 = 'Toyota'

const autoBrands = ['Audi', 8, 'BMW', 'Mazda', true, 'Toyota', ['MB', 'VW']]
console.log(autoBrands)
console.log(autoBrands[0])
console.log(autoBrands[3])
console.log(autoBrands.length)

// 7.1 Methods of arrays
/* 
array.push(items) add an element to the end of an array
array.pop() delete an element from the end of an array
array.shift() delete an element from the begin of an array
array.unshift() add an element to the begin of an array
array.splice([startFromElement], [deleteHowMany, newElementsInstead]), 
array.slice(), 
array.forEach(),
array.index(), 
array.includes()
*/
const autoBrands1 = ['Audi', 'BMW', 'Mazda', 'Toyota', 'MB', 'VW']
console.log(autoBrands1)
autoBrands1.push('Nissan')
console.log(autoBrands1)
autoBrands1.pop(6)
console.log(autoBrands1)
autoBrands1.shift(0)
console.log(autoBrands1)
autoBrands1.unshift('Volvo')
console.log(autoBrands1)
autoBrands1.splice(2, 2, 'GGG')
console.log(autoBrands1)

// 8. Loops===============================================================================
console.log('start')
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('finish')

// Loops through array with for
const autoBrands2 = ['Audi', 'BMW', 'Mazda', 'Toyota', 'MB', 'VW']
console.log(autoBrands2)
for (i = 0; i < 3; i++) {
    console.log(autoBrands2[i])
}

//  Loops through array with for (of)
const autoBrands3 = ['Volvo', 'Cheery', 'Fiat', 'Suzuki', 'Opel', 'Jeep']
console.log(autoBrands3)
for (let item of autoBrands3) {
    console.log(item)
}

//  Loops through array with forEach()
const autoBrands4 = ['Peugeot', 'Renault', 'Citroen', 'MiniCuper', 'Saab', 'LandRover']
console.log(autoBrands4)
autoBrands4.forEach(function (item, index) {
    console.log(`${index}. ${item} `)
})

const autoBrands5 = ['ZAZ', 'MAZ', 'KAMAZ', 'BELAZ', 'LAZ']
autoBrands5.forEach(printBrand)
function printBrand(item, index) {
    console.log(`${index}. ${item} `)
}
// the same, but like arrow function 
const autoBrands6 = ['ZAZa', 'MAZa', 'KAMAZa', 'BELAZa', 'LAZa']
autoBrands6.forEach((item, index) => {
    console.log(`${index}. ${item} `)
})
// the same in one line
autoBrands6.forEach((item, index) => console.log(`${index}. ${item} `))

// 9. Objects=============================================================================
// Objects properties
let userName2 = 'Ben'
let age2 = 30
let isMarried = false

const person2 = {
    userName2: 'Ben',
    age2: 30,
    isMarried2: false,
    profession2: 'Designer'
}
console.log(person2)
console.log(person2.userName2)
console.log(person2['age2'])

let propertyName2 = 'profession2'
console.log(person2[propertyName2])

person2.city2 = 'Rome'
console.log(person2)

delete person2.age2
console.log(person2)

// 10. Objects Methods====================================================================
const person3 = {
    userName3: 'Mark',
    age3: 33,
    isMarried3: true,
    profession3: 'Financier',
    sayHi3: function (name) {
        console.log(`Hello, ${name}!`)
    }
}
person3.sayHi3('Oleg')
// add a method to the object
person3.sayBuy3 = function (name) {
    console.log(`Goodbuy, ${name}!`)
}
person3.sayBuy3('Dima')

// 11. Keyword this=======================================================================
const person4 = {
    userName4: 'Kate',
    age4: 25,
    isMarried4: false,
    profession4: 'Financier',
    sayHi4: function (name) {
        console.log(this)
        console.log(`Hello, ${name}! My name is ${this.userName4}.`)
    }
}
person4.sayHi4('Bet')

// 12. Loops over an object with for in (do not mix with for of)==========================
const person5 = {
    userName5: 'Mira',
    age5: 21,
    isMarried5: false,
    profession5: 'Dancer',
    sayHi5: function (name) {
        console.log(this)
        console.log(`Hello, ${name}! My name is ${this.userName5}.`)
    }
}
person5.sayHi5('Gabi')
for (let key in person5) {
    // console.log(key)
    console.log(key, ':', person5[key])
}

//13. Nuance - const and a change of an object and an array===============================
const person6 = {
    userName6: 'Mira',
    age6: 21,
    isMarried6: false,
}
person6.proff = 'Writer'
/*caught TypeError: Assignment to constant variable. at main.js: 379: 9
person6 = {
    userName6: 'Nik'
}
*/

// 14. Classes. Constructors of objects===================================================
const person7 = {
    userName7: 'Kate',
    age7: 25,
    isMarried7: false,
    profession7: 'Financier',
    sayHi7: function (name) {
        console.log(this)
        console.log(`Hello, ${name}! My name is ${this.userName7}.`)
    }
}

const person8 = {
    userName8: 'Kate',
    age8: 25,
    isMarried8: false,
    profession8: 'Financier',
    sayHi8: function (name) {
        console.log(this)
        console.log(`Hello, ${name}! My name is ${this.userName8}.`)
    }
}
/*опишем класс, это как чертеж для всех будущих объектов (person) которые будут 
создаваться на его основе */

class Person {
    constructor(userName, age, isMarried) {
        this.userName = userName
        this.age = age
        this.isMarried = isMarried
    }
    sayHi(name) {
        console.log(`Hello, ${name}! My name is ${this.userName}.`)
    }
}

const person9 = new Person('Kit', 28, false)
console.log(person9)
const person10 = new Person('Baby', 18, false)
console.log(person10)
person9.sayHi('Adam')

// 15. Выбор ДОМ элементов================================================================
// выбор одного (1го найденного) элемента ДОМ по селектору
// document.querySelector('selector')
const heading = document.querySelector('h2')
console.log(heading)

document.querySelector('h2').classList.add('red')

const heading3 = document.querySelector('h3')
heading3.classList.add('blue')

// выбор всех элементов ДОМ по селектору
// document.querySelectorAll('selector')
const headings = document.querySelectorAll('h2')
console.log(headings)
for (let item of headings) {
    console.log(item)
    item.classList.add('red-text')
}

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)
// for (let p of paragraphs) {
//     console.log(p)
//     p.classList.add('green-text')
// }

paragraphs.forEach(function (p) {
    p.classList.add('green-text')
})

//также есть и другие методы
document.getElementsByClassName('link')// выбор коллекции элементов по CSS классу
document.getElementsByTagName('h1')  // выбор коллекции элементов по тэгу
document.getElementById('header')  // выбор одного элемента по ID

// 17. Работа с CSS классами==============================================================
/*
elemrnt.classList.add()
.add()
.remove()
.toggle()
.contains()
*/

const head = document.querySelector('h2')
head.classList.add('red-text')
head.classList.remove('red-text')
head.classList.toggle('green-text')
head.classList.toggle('green')
// head.classList.toggle('green')
if (head.classList.contains('green')) {
    console.log(1)
} else {
    console.log(0)
}

// 6.2 return
// function summ2(a, b) {
//     console.log('start')
//     const summ2 = a + b
//     return summ2
//     console.log('finish')
// }
// let res2 = summ2(58, 6)
// console.log(res2)

// function summ5(var1, var2) {
//     return var1 + var2;
// }
// console.log(summ5(5, 8))

// function summ6(a, b) {
//     const res6 = a + b
//     return res6
// }
// console.log(summ6(55, 6))
// // console.log(typeof res6)
// let res6 = summ6(55, 6)
// console.log(res6)