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
