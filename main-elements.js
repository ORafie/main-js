// Elements===============================================================================
/*
to create an element
document.createElement('tad-name')

to change HTML content of an element
element.innerHTML = ''

to change text content of an element
node.innerText = ''

to clone an element
node.cloneNode() // true - with innet text and tags; false - without

to insert an element inside another element
element.append(nodesOrDOMStrings)

to delete an element
element.remove()
*/

const container = document.querySelector('#elementsContainer')

// to create a header
const newHeader = document.createElement('h1')
newHeader.innerText = 'New header'
container.append(newHeader)

// to clone an empty element 
const mainHeader = document.querySelector('head')
const headerCopy = mainHeader.cloneNode()
container.append(headerCopy)

// to clone an element with inner text and tags
const mainHeader2 = document.querySelector('head')
const headerCopy2 = mainHeader.cloneNode(true)
container.append(headerCopy2)

// to insert html with a line (string)
const htmlExampl = '<h2>one more header</h2>'
container.insertAdjacentHTML('beforeend', htmlExampl)

// to insert html with a template literals
const title = 'one title'
const htmlExampl2 = `<h2>${title}</h2>`
container.insertAdjacentHTML('beforeend', htmlExampl2)
