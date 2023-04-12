// 19. listening events===================================================================
/*
addEventListener
onclick
*/
// < !--Работа с атрибутами.Прослушка событий.Изображение-- >=============================
const button1 = document.querySelector('#button')
const img1 = document.querySelector('#logo')
button1.value = 'Delete'
// слушаем событие Клик и когда происходит Клик удаляем картинку
// button1.addEventListener('click', function () {
//     console.log('Click!')
//     img1.remove()
// })
// когда происходит Клик удаляем картинку
// button1.onclick = function () {
//     console.log('Click')
//     img1.remove()
// }

// слушаем событие Клик и когда происходит Клик можем вызывать разные функции
// button1.addEventListener('click', function () {
//     console.log('Click 1!')
// })
// button1.addEventListener('click', function () {
//     console.log('Click 2!')
// })
// button1.addEventListener('click', function () {
//     console.log('Click 3!')
// })

/* записываем функцию в событие Клик, если повесить несколько функций, то они запишутся  
друг поверх друга
*/
button1.onclick = function () {
    console.log('Click 1')
}
button1.onclick = function () {
    console.log('Click 2')
}
button1.onclick = function () {
    console.log('Click 3')
}

//    < !--Прослушка событий 2. Форма-- >=================================================

const inputText = document.querySelector('#input-text')
const textBlock = document.querySelector('#text-block')

// variant 1
/*
inputText.addEventListener('input', function () {
    // console.log('input')
    console.log(inputText.value)
    textBlock.innerText = inputText.value
})
*/

// variant 2 (the same to var.1) - with arrow function
/*
inputText.addEventListener('input', () => {
    // console.log('input')
    console.log(inputText.value)
    textBlock.innerText = inputText.value
})
*/

// variant 3 (the same to var.1) - with separated function
/*
inputText.addEventListener('input', inputHundler)

function inputHundler() {
    console.log(inputText.value)
    textBlock.innerText = inputText.value
}
*/

//    < !--Прослушка событий 3. Event-- >=================================================

// general
/*
const list = document.querySelector('#list')
list.addEventListener('click', function () {
    console.log(this)
})
*/

//anything particullar
const list = document.querySelector('#list')
list.addEventListener('click', function (event) {
    console.log(this)
    console.log(event)
    console.log(event.target)
})
