// 18. attributes=========================================================================
/*
getAttribute(attrName) возвращает значение указанного атрибута
setAttribute(name, value) добавляет указанный атрибут и его значение к элементу
hasAttribute(attrName) возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) удаляет указанный атрибут
toggleAttribute(name, force) добавляет новый атрибут при отсутствии или удаляет существующий
hasAttributes() возвращает true, если у аргумента имеются какие либо атрибуты
getAttributesNames() возвращает названия атрибутов элемента
*/

const img = document.querySelector('#logo')
const srcValue = img.getAttribute('src')
console.log(srcValue)

img.setAttribute('src', './img/php.png')
img.setAttribute('width', '200')
img.src = './img/js.png'

const button = document.querySelector('#button')
button.setAttribute('value', 'send')
button.value = 'text for button'